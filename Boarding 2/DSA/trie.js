class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
  autoComplete(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    let words = [];
    function dfs(node, path) {
      if (node.isEndOfWord) {
        words.push(path);
      }
      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    }
    dfs(node, prefix);
    return words;
  }
  longestCommonPrefix() {
    let prefix = "";
    let node = this.root;
    while (true) {
      let keys = Object.keys(node.children);
      if (keys.length !== 1 || node.isEndOfWord) break;

      prefix += keys[0];
      node = node.children[keys[0]];
    }
    return prefix;
  }
  printAll() {
    function dfs(node, word) {
      if (node.isEndOfWord) {
        console.log(word);
      }
      for (let char in node.children) {
        dfs(node.children[char], word + char);
      }
    }
    dfs(this.root, "");
  }
}

const trie = new Trie();
trie.insert("car");
trie.insert("cat");
trie.insert("cap");

console.log("search ", trie.search("Hello"));
console.log("startsWith ", trie.startsWith("H"));
console.log("auto Compelete ", trie.autoComplete("a"));
console.log("longest common prefix : ", trie.longestCommonPrefix());
// trie.printAll()
