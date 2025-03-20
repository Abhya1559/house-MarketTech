class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.word = '';
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    const lowerWord = word.toLowerCase();

    for (const char of lowerWord) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
    current.word = word;
  }

  search(prefix) {
    const results = [];
    let current = this.root;
    const lowerPrefix = prefix.toLowerCase();

    // Navigate to the last node of the prefix
    for (const char of lowerPrefix) {
      if (!current.children.has(char)) {
        return results;
      }
      current = current.children.get(char);
    }

    // Collect all words starting from this node
    this.collectWords(current, results);
    return results;
  }

  collectWords(node, results) {
    if (node.isEndOfWord) {
      results.push(node.word);
    }

    for (const child of node.children.values()) {
      this.collectWords(child, results);
    }
  }
}