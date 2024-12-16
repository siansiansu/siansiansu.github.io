# Filter Installation Strategy

There are N houses along the street. Carbon filters are already installed in some of them. We would like to install filters in the remaining houses (those that do not possess them yet). Two types of filter, named 'a' and 'b' are being used. The filters work best if no three adjacent houses have the same type of filter. The houses are represented as a string of characters a, b' and ? (a' and 'b' denote a house with a filter of a given type installed; "? represents a house with no filter yet. Your task Is to make a plan of the filter types to be installed in the houses that do not yet have them.

Write a function

```cpp
string solution(string& S)
```

Given a string S of length N, returns a string that is the result of replacing each '?' in string S with an 'a' or a'b' character and does not contain three identical consecutive letters (in other words, neither "aaa" nor bbb* may occur in the processed string).
Examples:

1. Given S = "a?bb", your function should return "aabb".
2. Given S = "??abb*, your function should return "ababb", "bbabb" or "baabb"
3. Given S = 'a?b?aa", your function should return "aabbaa".
4. Given S = "aa??aa", your function should return "aabbaa"

Write an efficient algorithm for the following assumptions:

1. string S is made only of the following characters: 'a', 'b' and/or '?
2. N is an integer within the range [1...500,000);
3. it is always possible to create a plan so that there are no three identical consecutive filters.

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

string solution(string &S)
{
    vector<int> seen;

    // 這邊先建立一個 seen 數列，方便操作
    // 例如以 a?bb 來說，就會 return [0, 0, 1, 0, -1, -1, 0, 0]
    for (char c : s)
    {
        if (c == 'a')
        {
            seen.push_back(1);
        }
        else if (c == 'b')
        {
            seen.push_back(-1);
        }
        else
        {
            seen.push_back(0);
        }
    }

    seen.insert(seen.begin(), {0, 0});
    seen.insert(seen.end(), {0, 0});

    int n = seen.size();

    auto helper = [&seen](int i)
    {
        // 如果遇到問號的話
        if (seen[i] == 0)
        {
            vector<int> sums = {seen[i - 2] + seen[i - 1], seen[i - 1] + seen[i + 1], seen[i + 1] + seen[i + 2]};
            if (find(sums.begin(), sums.end(), 2) != sums.end())
            {
                 // 如果相鄰的兩個 'a'，則填入 'b'
                seen[i] = -1;
            } else if (find(sums.begin(), sums.end(), -2) != sums.end())
            {
                // 如果相鄰的兩個 'b'，則填入 'a'
                seen[i] = 1;
            }
        }
    };

    // 由左到右走訪
    for (int i = 2; i < n - 2; ++i)
    {
        helper(i);
    }

    // 由右到左走訪
    for (int i = n - 3; i > 1; --i)
    {
        helper(i);
    }


    // 由左到右走訪，如果遇到 0
    for (int i = 2; i < n - 2; ++i) {
        if (seen[i] == 0)
        {
            // 檢查前一個元素是 1 還是 -1
            seen[i] = (seen[i - 1] > 0) ? -1 : 1;
        }
    }

    // 將數列填入 res
    string res;
    for (int i = 2; i < n - 2; ++i)
    {
        if (seen[i] == 1)
        {
            res += 'a';
        } else if (seen[i] == -1) {
            res += 'b';
        }
    }

    return res;
}

int main()
{
    vector<string> s = {"a?bb", "??abb", "a?b?aa", "aa??aa"};
    for (auto c : s)
    {
        cout << solution(s) << endl;
    }
}
```

- T: $O()$
- S: $O()$
