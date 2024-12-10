# Position of robot after given movements

Assume that:
- the length of string `moves` is within the range [1...100];
- string `moves` is made only of the following characters: `<`, `^`, `>`, `v`;
- the robot never visits the same point twice, except for the starting point, which may be visited at the start and end of the robots path.

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

:::spoiler Solution
```cpp=
bool solution(string& moves)
{
    int up = 0, down = 0;
    int left = 0, right = 0;
    
    for (auto m : moves)
    {
        if (m == '<')
        {
         ++left;
        }
        else if (m == '^')
        {
            ++up;
        }
        else if (m == '>')
        {
            ++right;
        }
        else if (m == 'v')
        {
            ++down;
        }
    }
    return up == down && left == right;
};

int main()
{
    vector<string> moves = {"<", "<>^v", "<>^v", ">>>>>>>>>>>>>>>>>>>><<"};
    for (auto m : moves)
    {
        printf("%d\n", solution(m));
    }
}
```
- 時間複雜度：$O(n)$
- 空間複雜度：$O(1)$
:::
