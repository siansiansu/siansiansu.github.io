---
title: gameWinner
---

# gameWinner

Wendy 和 Bob 輪流拿掉 `w` 和 `b`，只能拿掉被同樣字母包圍的，回傳誰贏。

給予一個陣列 `colors = "wwwbbbbwww"`

1. Wendy 拿掉 `index = 1` 的 `w`，這時候 `colors = "wwbbbbwww"`
2. Bob 拿掉 `index = 3` 的 `b`，這時候 `colors = "wwbbbwww"`
3. Wendy 拿掉 `index = 6` 的 `w`，這時候 `colors = "wwbbbww"`
4. Bob 拿掉 `index = 3` 的 `b`，這時候 `colors = "wwbbww"`
5. Wendy 沒辦法拿了，所以 Bob 贏



```cpp
#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'gameWinner' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING colors as parameter.
 */

string gameWinner(string colors)
{
    int n = colors.size();

    int wendy = 0, bob = 0;

    for (int i = 1; i < n - 1; ++i)
    {
        // 如果字母被包圍的話
        if (colors[i - 1] == colors[i] && colors[i] == colors[i + 1])
        {
            // 如果字母是 w 的話，wendy 拿
            if (colors[i] == 'w')
            {
                ++wendy;
            }
            // 反之，bob 拿
            else
            {
                ++bob;
            }
        }
    }
    // 最後計算誰贏
    return (wendy > bob) ? "wendy" : "bob";
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string colors;
    getline(cin, colors);

    string result = gameWinner(colors);

    fout << result << "\n";

    fout.close();

    return 0;
}

```
- T: $O()$
- S: $O()$

