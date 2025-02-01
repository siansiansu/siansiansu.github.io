# C++ Templates and Snippets

## C++ Define

```cpp=
#define all(x) (x).begin(), (x).end()

sort(all(vec))
```

## Custom Sort

Sort a vector in descending order:

```cpp
sort(v.begin(), v.end(), [](const vector<int>& a, const vector<int>& b) {
    return a > b;
});
```

## Diagonal Check

Check if an element is on the main or anti-diagonal of a square matrix:

```cpp
// For a square matrix of size n x n
bool isOnDiagonal(int i, int j, int n) {
    return (i == j) || (i + j == n - 1);
}
```

## Binary Search with lower_bound and upper_bound

Find the position of elements in a sorted vector:

```cpp
// Find the first element greater than or equal to val
auto it_lower = lower_bound(v.begin(), v.end(), val);

// Find the first element strictly greater than val
auto it_upper = upper_bound(v.begin(), v.end(), val);
```

## Area Calculation

Calculate area (useful in problems like Container With Most Water):

```cpp
int calculateArea(int height1, int height2, int width) {
    return min(height1, height2) * width;
}
```

## Integer to String Conversion

Convert an integer to a single-character string:

```cpp
string intToChar(int i) {
    return string(1, 'a' + i);
}
```

## Custom Compare for Priority Queue

Example for K Closest Points to Origin:

```cpp
auto compare = [](const pair<int,int>& a, const pair<int,int>& b) {
    return a.first*a.first + a.second*a.second > b.first*b.first + b.second*b.second;
};

priority_queue<pair<int,int>, vector<pair<int,int>>, decltype(compare)> pq(compare);
```

## Greatest Common Divisor (GCD)

Calculate GCD using Euclidean algorithm:

```cpp
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// Alternatively, use C++17's std::gcd
#include <numeric>
int gcd = std::gcd(a, b);
```

## Prime Number Check

Check if a number is prime:

```cpp
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

## Sudoku Box Index

Calculate the box index in a Sudoku grid:

```cpp
int getBoxIndex(int row, int col) {
    return (row / 3) * 3 + col / 3;
}
```

## Matrix Rotation

Rotate a square matrix 90 degrees clockwise:

```cpp
void rotateMatrix(vector<vector<int>>& matrix) {
    int n = matrix.size();
    // Transpose
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    // Reverse each row
    for (auto& row : matrix) {
        reverse(row.begin(), row.end());
    }
}
```

## Binary Search in M x N Matrix

Perform binary search in a 2D matrix:

```cpp
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int m = matrix.size(), n = matrix[0].size();
    int left = 0, right = m * n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        int midValue = matrix[mid / n][mid % n];

        if (midValue == target) return true;
        if (midValue < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
}
```

## Trie Implementation

Basic Trie (Prefix Tree) implementation:

```cpp
class TrieNode {
public:
    array<TrieNode*, 26> children;
    bool isEndOfWord;

    TrieNode() : children(), isEndOfWord(false) {}
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() : root(new TrieNode()) {}

    void insert(const string& word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (!node->children[index]) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->isEndOfWord = true;
    }

    bool search(const string& word) {
        TrieNode* node = findNode(word);
        return node && node->isEndOfWord;
    }

    bool startsWith(const string& prefix) {
        return findNode(prefix) != nullptr;
    }

private:
    TrieNode* findNode(const string& str) {
        TrieNode* node = root;
        for (char c : str) {
            int index = c - 'a';
            if (!node->children[index]) return nullptr;
            node = node->children[index];
        }
        return node;
    }
};
```

## Binary Tree Node Indexing

Calculate child indices in a binary tree:

```cpp
int getLeftChildIndex(int parentIndex) {
    return 2 * parentIndex + 1;
}

int getRightChildIndex(int parentIndex) {
    return 2 * parentIndex + 2;
}
```

## Binary Tree BFS

Perform Breadth-First Search on a binary tree:

```cpp
vector<vector<int>> levelOrderTraversal(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;

        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            currentLevel.push_back(node->val);

            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }

        result.push_back(currentLevel);
    }

    return result;
}
```

## Binary Tree Height

Calculate the height of a binary tree:

```cpp
int getHeight(TreeNode* root) {
    if (!root) return -1;
    return 1 + max(getHeight(root->left), getHeight(root->right));
}
```

## Binary Tree Traversals

Implement pre-order, in-order, and post-order traversals:

```cpp
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> result;
        preorder(root, result);
        return result;
    }

    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        inorder(root, result);
        return result;
    }

    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> result;
        postorder(root, result);
        return result;
    }

private:
    void preorder(TreeNode* root, vector<int>& result) {
        if (!root) return;
        result.push_back(root->val);
        preorder(root->left, result);
        preorder(root->right, result);
    }

    void inorder(TreeNode* root, vector<int>& result) {
        if (!root) return;
        inorder(root->left, result);
        result.push_back(root->val);
        inorder(root->right, result);
    }

    void postorder(TreeNode* root, vector<int>& result) {
        if (!root) return;
        postorder(root->left, result);
        postorder(root->right, result);
        result.push_back(root->val);
    }
};
```

## Integer Reversal

Reverse an integer with overflow check:

```cpp
int reverse(int x) {
    int result = 0;
    while (x != 0) {
        int pop = x % 10;
        x /= 10;
        if (result > INT_MAX/10 || (result == INT_MAX/10 && pop > 7)) return 0;
        if (result < INT_MIN/10 || (result == INT_MIN/10 && pop < -8)) return 0;
        result = result * 10 + pop;
    }
    return result;
}
```

## Hamming Weight

Count the number of '1' bits in an integer:

```cpp
int hammingWeight(uint32_t n) {
    int count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}
```

## String Splitting

Split a string using custom delimiters:

```cpp
vector<string> split(const string& s, char delimiter) {
    vector<string> tokens;
    stringstream ss(s);
    string token;
    while (getline(ss, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}
```

## Vector Sum

Calculate the sum of a vector:

```cpp
#include <numeric>

long long vectorSum(const vector<int>& v) {
    return accumulate(v.begin(), v.end(), 0LL);
}

// Sum with condition
long long evenSum(const vector<int>& v) {
    return accumulate(v.begin(), v.end(), 0LL, [](long long sum, int val) {
        return sum + (val % 2 == 0 ? val : 0);
    });
}
```

## Random Number Generation

Generate random numbers within a specific range:

```cpp
#include <random>

int getRandomNumber(int min, int max) {
    static random_device rd;
    static mt19937 gen(rd());
    uniform_int_distribution<> dis(min, max);
    return dis(gen);
}
```

## Random Element Selection from Vector

Select a random element from a vector with equal probability:

```cpp
template<typename T>
T getRandomElement(const vector<T>& v) {
    if (v.empty()) throw runtime_error("Vector is empty");
    return v[rand() % v.size()];
}
```

## O(1) Element Deletion from Array

Delete an element from an array in O(1) time:

```cpp
class RandomizedSet {
private:
    vector<int> nums;
    unordered_map<int, int> valToIndex;

public:
    bool remove(int val) {
        if (valToIndex.find(val) == valToIndex.end()) return false;

        int lastElement = nums.back();
        int indexToRemove = valToIndex[val];

        nums[indexToRemove] = lastElement;
        valToIndex[lastElement] = indexToRemove;

        nums.pop_back();
        valToIndex.erase(val);

        return true;
    }

    // Other methods (insert, getRandom) omitted for brevity
};
```

## Character to Digit Conversion

Convert a character digit to its integer value:

```cpp
int charToDigit(char c) {
    return c - '0';
}
```

## Maximum Element in Array

Find the maximum element in a vector:

```cpp
int getMaxElement(const vector<int>& v) {
    return *max_element(v.begin(), v.end());
}
```
