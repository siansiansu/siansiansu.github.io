# closestNumbers


給予一個陣列 `numbers`，輸出出兩者之差最小的組合。

例如 `numbers = [6, 2, 4, 10]`，輸出：
```
2 4
4 6
```

:::spoiler Solution
```cpp=
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);


/*
 * Complete the 'closestNumbers' function below.
 *
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

void closestNumbers(vector<int> numbers)
{
    int n = numbers.size();
    
    if (n <= 1) return;
    
    sort(numbers.begin(), numbers.end());
    
    int minDiff = numbers[1] - numbers[0];
    
    for (int i = 2; i < n; ++i)
    {
        minDiff = min(minDiff, numbers[i] - numbers[i - 1]);
    }

    unordered_map<int, int> m;
    
    for (int i = 1; i < n; ++i)
    {
        if (numbers[i] - numbers[i - 1] == minDiff)
        {
            printf("%d %d\n", numbers[i - 1], numbers[i]);
        }
    }
}
int main()
{
    string numbers_count_temp;
    getline(cin, numbers_count_temp);

    int numbers_count = stoi(ltrim(rtrim(numbers_count_temp)));

    vector<int> numbers(numbers_count);

    for (int i = 0; i < numbers_count; i++) {
        string numbers_item_temp;
        getline(cin, numbers_item_temp);

        int numbers_item = stoi(ltrim(rtrim(numbers_item_temp)));

        numbers[i] = numbers_item;
    }

    closestNumbers(numbers);

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

```
- 時間複雜度：$O()$
- 空間複雜度：$O()$
:::
