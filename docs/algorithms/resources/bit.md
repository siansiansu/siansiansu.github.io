# Common Bit Manipulation

Basic Operations
----------------

```cpp=
// Bitwise AND (&)
5 & 3      // binary: 0101 & 0011 = 0001
           // Rule: 1 if both bits are 1, otherwise 0

// Bitwise OR (|)
5 | 3;     // binary: 0101 | 0011 = 0111
           // Rule: 1 if at least one bit is 1, otherwise 0

// Bitwise XOR (^)
5 ^ 3;     // binary: 0101 ^ 0011 = 0110
           // Rule: 1 if bits are different, 0 if same

// Bitwise NOT (~)
~5;        // binary: ~0101 = 1010 (in 32-bit: 11111111111111111111111111111010)
           // Rule: Inverts all bits

// Left Shift (<<)
5 << 1;    // binary: 0101 << 1 = 1010 (equivalent to 5 * 2^1)
           // Rule: Shifts bits left, fills with 0 on right

// Right Shift (>>)
5 >> 1;    // binary: 0101 >> 1 = 0010 (equivalent to 5 / 2^1)
           // Rule: Shifts bits right, fills with 0 (or 1 for negative numbers in arithmetic shift)
```

Common Bit Manipulation Techniques
----------------------------------

### Find Unique Element in Array (XOR)

```cpp=
int findUnique(vector<int>& nums)
{
    int res = 0;
    for (int num : nums)
    {
        res ^= num;
    }
    return res;
}
```

Explanation: XOR of a number with itself is 0, and XOR with 0 gives the number itself. So, all duplicates cancel out.

### Check Odd or Even (AND)

```cpp=
bool isOdd(int n)
{
    return n & 1;
}
```

Explanation: The least significant bit is 1 for odd numbers and 0 for even numbers.

### Check if Power of 2 (AND)

```cpp=
bool isPowerOfTwo(int n)
{
    return n > 0 && !(n & (n - 1));
}
```

Explanation: Powers of 2 have only one bit set. Subtracting 1 flips all bits after that set bit.

### Decimal to Binary Conversion

```cpp=
string decimalToBinary(int n) {
    string r;
    while (n) {
        r = (n % 2 ? "1" : "0") + r;
        n /= 2;
    }
    return r.empty() ? "0" : r;
}
```

### Count Set Bits (Using Built-in Function)

```cpp=
int countSetBits(int n)
{
    return __builtin_popcount(n);  // For int
    // __builtin_popcountl(n);     // For long
    // __builtin_popcountll(n);    // For long long
}
```

### Find Rightmost Set Bit (AND)

```cpp=
int rightmostSetBit(int n)
{
    return n & -n;
}
```

Explanation: -n is the two's complement of n, which inverts all bits and adds 1.

### Clear Lowest Set Bit (AND)

```cpp=
int clearLowestSetBit(int n)
{
    return n & (n - 1);
}
```

Explanation: n-1 has all bits same as n from left until the rightmost set bit, which becomes 0, and all bits to its right become 1.

### Swap Two Numbers (XOR)

```cpp=
void swapXOR(int& a, int& b)
{
    a ^= b;
    b ^= a;
    a ^= b;
}
```

Explanation: Uses the property (A^B)^B = A and A^A = 0.

Bit Manipulation Operations
---------------------------

### Set Bit

```cpp=
int setBit(int n, int bitPos)
{
    return n | (1 << bitPos);
}
```

### Clear Bit

```cpp=
int clearBit(int n, int bitPos)
{
    return n & ~(1 << bitPos);
}
```

### Flip Bit

```cpp=
int flipBit(int n, int bitPos)
{
    return n ^ (1 << bitPos);
}
```

### Get Bit

```cpp=
bool getBit(int n, int bitPos)
{
    return (n >> bitPos) & 1;
}
```

Advanced Techniques
-------------------

### Isolate Rightmost 0-bit

```cpp=
int isolateRightmostZeroBit(int n)
{
    return ~n & (n + 1);
}
```

### Turn on Rightmost 0-bit

```cpp=
int turnOnRightmostZeroBit(int n)
{
    return n | (n + 1);
}
```

### Isolate Rightmost 1-bit

```cpp=
int isolateRightmostOneBit(int n)
{
    return n & (-n);
}
```

### Turn off Rightmost 1-bit

```cpp=
int turnOffRightmostOneBit(int n)
{
    return n & (n - 1);
}
```