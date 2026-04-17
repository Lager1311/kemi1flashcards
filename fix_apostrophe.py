import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Check current state
vant_count = content.count("van\u2019t")  # right single quote
vant_count2 = content.count("van't")      # straight apostrophe

print(f"van RIGHT-QUOTE-t occurrences: {vant_count}")
print(f"van STRAIGHT-APOSTROPHE-t occurrences: {vant_count2}")

# The fix: replace straight apostrophe van't with van\'t (JS escaped)
# In Python, to write the backslash+apostrophe: use chr(92) + chr(39)
backslash_apostrophe = chr(92) + chr(39)  # \'
replacement = "van" + backslash_apostrophe + "t"
print(f"replacement string repr: {repr(replacement)}")  # should be "van\\'t"

original = "van't"
count_before = content.count(original)
print(f"Before: {count_before} occurrences")

fixed_content = content.replace(original, replacement)

count_after = fixed_content.count(original)
count_new = fixed_content.count(replacement)
print(f"After: {count_after} original remaining, {count_new} replaced")

# Verify by checking around id:2139
import re
m = re.search(r'id:2139', fixed_content)
if m:
    snippet = fixed_content[m.start():m.start()+200]
    print(f"\nid:2139 snippet: {repr(snippet[-100:])}")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(fixed_content)
print("Saved.")
