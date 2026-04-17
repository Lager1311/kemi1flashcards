import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

js = content[content.find('<script>')+8:]
prob_start = js.find('const PROBLEMS')
prob_end = js.find('\nconst THEORY', prob_start)
prob_js = js[prob_start:prob_end]

# Extract all individual steps strings and check for issues
# Find all step arrays using a careful parser
i = 0
found_issues = []
while i < len(prob_js):
    idx = prob_js.find("steps:[", i)
    if idx == -1:
        break

    # Parse the steps array manually
    # Find the matching ]
    depth = 0
    j = idx + 7  # after steps:[
    in_string = False
    escape = False
    string_char = None
    steps_content = []
    current_step = []

    while j < len(prob_js):
        ch = prob_js[j]
        if escape:
            current_step.append(ch)
            escape = False
        elif in_string:
            if ch == '\\':
                escape = True
                current_step.append(ch)
            elif ch == string_char:
                in_string = False
                steps_content.append(''.join(current_step))
                current_step = []
            else:
                current_step.append(ch)
        else:
            if ch in ('"', "'"):
                in_string = True
                string_char = ch
            elif ch == '[':
                depth += 1
            elif ch == ']':
                if depth == 0:
                    break
                depth -= 1
        j += 1

    # Check each step for issues
    for step_idx, step in enumerate(steps_content):
        # Look for unescaped [ or ] that could be problematic
        if '[' in step or ']' in step:
            # Find problem id
            id_search = prob_js.rfind('id:', 0, idx)
            prob_id = prob_js[id_search:id_search+20]
            found_issues.append((prob_id, step_idx, step[:100]))

    i = idx + 7

if found_issues:
    print("Found steps with [ or ] characters:")
    for issue in found_issues:
        print(f"  {issue[0]}: step {issue[1]}: {repr(issue[2])}")
else:
    print("No steps with [ or ] found")

# Also check for steps with specific problematic chars
print()
print("Checking for patterns that could cause 'Invalid destructuring assignment target'...")
# This error is caused by something like `[x] = value` or `for ([x] of ...)`
# In string context: if a step contains "] =" that could be misinterpreted? No, strings are fine.
# Maybe the issue is with newlines in steps?
for m in re.finditer(r'steps:\[', prob_js):
    idx = m.start()
    snippet = prob_js[idx:idx+500]
    if '\n' in snippet[:snippet.find(']')]:
        print(f"Steps with newline at offset {idx}: {repr(snippet[:200])}")
        break

print("Done")
