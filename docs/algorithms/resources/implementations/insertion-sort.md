## Insertion Sort

|              | Quick Sort | Merge Sort | Heap Sort | Insertion Sort | Selection Sort |
|:------------:|:----------:|:----------:|:---------:|:--------------:|:--------------:|
|  best case   |   N logN   |   N logN   |  N logN   |       N        |      N^2       |
| average case |   N logN   |   N logN   |  N logN   |      N^2       |      N^2       |
|  worst case  |    N^2     |   N logN   |  N logN   |      N^2       |      N^2       |

https://the-algorithms.com/algorithm/insertion-sort?lang=c-plus-plus

### Approach

-   Define a "key" index, the subarray to the left of which is sorted.
-   Initiate "key" as 1, ie. the second element of array(as there is only one element to left of the second element, which can be considered as sorted array with one element).
-   If value of element at (key - 1) position is less than value of element at (key) position; increment "key".
-   Else move elements of sorted subarray that are greater than value of element at "key" to one position ahead of their current position. Put the value of element at "key" in the newly created void.

### Time Complexity

-   `О(n^2)` comparisons, `О(n^2)` swaps -- Worst Case
    
-   `O(n)` comparisons, `O(1)` swaps -- Best Case
    

### Space Complexity

`O(1)` \-\- (No extra space needed, sorting done in place)

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<int> insertionSort(vector<int>& nums) {
    int n = nums.size();
    for (int i = 1; i < n; ++i) {
        int key = nums[i];
        int j = i - 1;
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            --j;
        }
        nums[j + 1] = key;
    }
    return nums;
}

int main() {
    vector<int> nums = {5, 4, 3, 2, 1};
    vector<int> sorted = insertionSort(nums);
    for(auto& c : sorted) {
        cout << c << ", ";
    }
}
```
