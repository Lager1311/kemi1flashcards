import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# The problem: stray backtick between </p> and the closing backtick
# Pattern: ...i praktiken.</p>\n`\n` },\n
bad = 'i praktiken.</p>\n`\n` },'
good = 'i praktiken.</p>\n` },'

if bad in content:
    content = content.replace(bad, good)
    print('Fixed: removed stray backtick in Elektrokemi section')
else:
    print('Pattern not found, searching differently...')
    idx = content.find('i praktiken.</p>')
    print(repr(content[idx:idx+30]))

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
