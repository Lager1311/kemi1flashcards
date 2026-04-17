import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# The problem: expand_steps.py matched steps array with a bad regex that stopped
# at the first ] inside a string (e.g. [H+]). This left dangling old step content
# after the new steps array, like:
#   steps:['new steps'] = old_rest','more_old'] },
# This dangling '] = old_rest...']' makes JS try destructuring assignment.
#
# Fix: find these dangling patterns and remove them.

# Pattern: steps:[...new content...] FOLLOWED BY old junk until the next real closing
# The junk looks like: ] = something','something','something'] or similar
# We need to find: 'real_end_of_steps'] then old_junk then '] and remove old_junk+]

# More precisely: after a steps:[...] array, if there's content like:
#   ] = ...',...']
# that content needs to be removed.

# Find all problem blocks and check for dangling content
count = 0

# Pattern: find steps array then any dangling content before the next problem/end
# Dangling content: after steps:[...VALID_END...] there should be nothing except:
#   }, (end of problem) or whitespace

# Find all occurrences of steps:[ and fix them
# The key signature: after a valid steps end ('] with specific content), there's
# = or , followed by old step content and another ]

# Simpler approach: find lines where steps:[ ... ] ... ] }
# i.e., a line that has TWO closing '] patterns

js_start = content.find('<script>') + 8
js_end = content.rfind('</script>')

prob_start_in_html = content.find('const PROBLEMS')
prob_end_in_html = content.find('\nconst THEORY', prob_start_in_html)

prob_section = content[prob_start_in_html:prob_end_in_html]

# Find the dangling pattern:
# After steps:[...] there is additional content like ] something']
# The dangling part matches: ] = '...','...'] or ] ,'...']
# General pattern after valid steps end: ] (not followed by , or whitespace and })
# Actually simpler: look for steps:[...CORRECT_END...] THEN_JUNK ]
# where THEN_JUNK contains , or =

# Approach: find all "steps:[" and parse the array manually
# If the array ends but there's still content (until the next }), it's dangling

lines = prob_section.split('\n')
fixed_lines = []
for line in lines:
    if 'steps:[' not in line:
        fixed_lines.append(line)
        continue

    # Parse this line manually
    steps_idx = line.find('steps:[')
    before_steps = line[:steps_idx + 7]  # "steps:["

    # Find the real end of the steps array using proper string-aware parsing
    i = steps_idx + 7
    in_string = False
    string_char = None
    escape = False
    depth = 0  # bracket depth (starts at 1 for the opening [)

    while i < len(line):
        ch = line[i]
        if escape:
            escape = False
        elif in_string:
            if ch == '\\':
                escape = True
            elif ch == string_char:
                in_string = False
        else:
            if ch in ('"', "'"):
                in_string = True
                string_char = ch
            elif ch == '[':
                depth += 1
            elif ch == ']':
                if depth == 0:
                    # This is the closing ] of the steps array
                    break
                depth -= 1
        i += 1

    steps_end = i  # position of closing ]
    valid_steps = line[steps_idx:steps_end + 1]  # steps:[...VALID...]
    rest_of_line = line[steps_end + 1:]  # everything after the valid steps

    # Check if there's dangling content
    # rest_of_line should be: just whitespace/comma or }
    rest_stripped = rest_of_line.strip().lstrip(',').strip()

    if rest_stripped and rest_stripped != '}' and rest_stripped != '},' and not rest_stripped.startswith('//'):
        # There's dangling content - find the actual end
        # The dangling content ends at the last ] before the },
        # Find ] },  or ] }
        actual_end = rest_of_line.rfind(']')
        if actual_end != -1:
            after_actual_end = rest_of_line[actual_end+1:].strip()
            if after_actual_end in ('', '},', '}', ' },', ' }'):
                # Remove the dangling content
                old_line = line
                new_line = line[:steps_end + 1] + rest_of_line[actual_end + 1:]
                fixed_lines.append(new_line)
                count += 1
                print(f'Fixed dangling steps in line (first 100): {repr(old_line[:100])}')
                print(f'  -> removed: {repr(rest_of_line[:actual_end+1])}')
                print()
                continue

    fixed_lines.append(line)

new_prob_section = '\n'.join(fixed_lines)
content = content[:prob_start_in_html] + new_prob_section + content[prob_end_in_html:]

print(f'Fixed {count} dangling step fragments')

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
