---
title: Palindrome Minimization
---

# Palindrome Minimization

You are given a string S consisting of N letters. In a single move, you can remove a letter from either the left or the right end of S.

A palindrome is a word that reads the same both forwards and backwards. An empty string is not considered to be a palindrome. For example:

- "aba", "c" and "xyzzyx are palindromes;
- "fg", \*abbac" and an empty string (\*) are not palindromes.

Your task is to find the minimum number of moves required so that the resulting string is not a palindrome.

Write a function:

```cpp
int solution(string &S);
```

that, given a string S consisting of N characters, returns the minimum number of moves needed.

Examples:

1. Given S = "xyzx", the function should return 0 because S is already not a palindrome.
2. Given S = "kayak", the function should retum 1. By deleting one letter from the left, you obtain the string "ayak", which is not a palindrome.
3. Given S = "xxxx", the function should return 4. The only option is to delete all the letters one by one from S to obtain an empty string, which is not a palindrome.
4. Given S = "abba", the function should return 1.

Write an efficient algorithm for the following assumptions:

- string S is made only of lowercase letters (a-z);
- N is an integer within the range [1...100,000].


```cpp
#include<vector>
#include<string>

using namespace std;

int solution(string &S)
{
    int n = S.size();

    int left = 0, right = n - 1;

    bool isPalindrome = true;

    while (left < right)
    {
        if (S[left] != S[right])
        {
            isPalindrome = false;
        }
        ++left; --right;
    }

    if (!isPalindrome) return 0;

    bool isSame = true;

    for (int i = 1; i < n; ++i)
    {
        if (S[i] != S[0])
        {
            isSame = false; break;
        }
    }
    if (isSame) return n;
    return 1;
}

int main()
{
    vector<string> moves = {"xyzx", "kayak", "xxxx", "abba"};
    vector<int> ans = {0, 1, 4, 1};
    for (int i = 0; i < moves.size(); ++i)
    {
        printf("%d\n", solution(moves[i]) == ans[i]);
    }
}
```
- T: $O()$
- S: $O()$

