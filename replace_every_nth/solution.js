
// Regex solution
function replaceNth(text, n, oldValue, newValue) {

  // Handle edge case, no matches possible
  if (n < 1) {
      return text;
  }

  let regex = buildRegex(n, oldValue);

  // Match each grouping
  let matches = findMatches(text, regex);

  matches.forEach((match) => {
    // match[0] will be the full match, match[1] will be the capture grouping which we want to keep
    text = text.replace(match[0], match[1] + newValue);
  });

  return text;
}

function findMatches(text, regex) {
  let matches = [];
  let match = regex.exec(text);
  while (match != null) {
      matches.push(match);
      match = regex.exec(text);
  }
  return matches;
}

// Build regex with regex grouping
function buildRegex(n, oldValue) {
    let regex = '(';
    for (i = 0; i < n-1; i++) {
        regex += oldValue + '.*?';
    }
    regex += ')'
    regex += oldValue;

    return new RegExp(regex, 'g');
}
