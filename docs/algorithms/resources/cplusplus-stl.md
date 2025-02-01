# C++ STL and Data Structures

## Data Types and Ranges

| Type | Bytes | Range |
|------|-------|-------|
| int | 4 | -2,147,483,648 to 2,147,483,647 |
| unsigned int | 4 | 0 to 4,294,967,295 |
| long long | 8 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| unsigned long long | 8 | 0 to 18,446,744,073,709,551,615 |
| char | 1 | -128 to 127 |
| unsigned char | 1 | 0 to 255 |
| float | 4 | ±3.4E +/- 38 (7 digits) |
| double | 8 | ±1.7E +/- 308 (15 digits) |

## Containers

### vector
```cpp
#include <vector>

vector<int> v;
v.push_back(1);
v.emplace_back(2);  // More efficient than push_back
v.pop_back();
v.size();
v.empty();
v.clear();
v[0];  // Access element (no bounds checking)
v.at(0);  // Access with bounds checking
```

### array
```cpp
#include <array>

array<int, 5> arr = {1, 2, 3, 4, 5};
arr.size();
arr.empty();
arr.front();
arr.back();
arr.fill(0);  // Fill entire array with a value
```

### list
```cpp
#include <list>

list<int> lst;
lst.push_front(1);
lst.push_back(2);
lst.pop_front();
lst.pop_back();
lst.size();
lst.empty();
```

### deque
```cpp
#include <deque>

deque<int> dq;
dq.push_front(1);
dq.push_back(2);
dq.pop_front();
dq.pop_back();
dq.size();
dq.empty();
```

### stack
```cpp
#include <stack>

stack<int> s;
s.push(1);
s.pop();
s.top();
s.size();
s.empty();
```

### queue
```cpp
#include <queue>

queue<int> q;
q.push(1);
q.pop();
q.front();
q.back();
q.size();
q.empty();
```

### priority_queue
```cpp
#include <queue>

priority_queue<int> pq;  // Max heap by default
priority_queue<int, vector<int>, greater<int>> min_pq;  // Min heap
pq.push(1);
pq.pop();
pq.top();
pq.size();
pq.empty();
```

### set / multiset
```cpp
#include <set>

set<int> s;
s.insert(1);
s.erase(1);
s.find(1);
s.count(1);
s.size();
s.empty();

multiset<int> ms;  // Allows duplicates
```

### unordered_set
```cpp
#include <unordered_set>

unordered_set<int> us;
// Similar operations to set, but with O(1) average time complexity
```

### map / multimap
```cpp
#include <map>

map<string, int> m;
m["key"] = 1;
m.erase("key");
m.find("key");
m.count("key");
m.size();
m.empty();

multimap<string, int> mm;  // Allows duplicate keys
```

### unordered_map
```cpp
#include <unordered_map>

unordered_map<string, int> um;
// Similar operations to map, but with O(1) average time complexity
```

## Algorithms

```cpp
#include <algorithm>

// Sorting
sort(v.begin(), v.end());
sort(v.begin(), v.end(), greater<int>());  // Descending order

// Binary search (on sorted ranges)
binary_search(v.begin(), v.end(), value);
lower_bound(v.begin(), v.end(), value);
upper_bound(v.begin(), v.end(), value);

// Min/Max
min_element(v.begin(), v.end());
max_element(v.begin(), v.end());

// Reverse
reverse(v.begin(), v.end());

// Find
find(v.begin(), v.end(), value);

// Count
count(v.begin(), v.end(), value);

// Remove duplicates
v.erase(unique(v.begin(), v.end()), v.end());
```

## Utility Functions

```cpp
#include <utility>

// Pair
pair<int, string> p = {1, "one"};
p.first;  // Access first element
p.second;  // Access second element

// Swap
swap(a, b);
```

## String Operations

```cpp
#include <string>

string s = "hello";
s.substr(1, 2);  // "el"
s.find("l");  // 2
s.replace(2, 2, "xx");  // "hexxo"
stoi("123");  // String to int
to_string(123);  // Int to string
```

## Bitset

```cpp
#include <bitset>

bitset<8> b("10101010");
b.count();  // Count set bits
b.test(1);  // Test bit at position 1
b.set(2);  // Set bit at position 2
b.reset(3);  // Reset bit at position 3
b.flip();  // Flip all bits
```

## Input/Output Streams

```cpp
#include <iostream>
#include <sstream>

// Standard I/O
cin >> x;
cout << x << endl;

// String streams
stringstream ss;
ss << "Hello " << 42;
string s = ss.str();
```
