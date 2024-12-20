# Set

用 vector 實作

```cpp=
#include <iostream>
#include <vector>
#include <algorithm> // For std::sort and std::binary_search

using namespace std;

class SimpleSet {
private:
    vector<int> elements;

public:
    // Insert an element into the set
    void insert(int value) {
        if (!contains(value)) {
            elements.push_back(value);
            sort(elements.begin(), elements.end());
        }
    }

    // Check if an element exists in the set
    bool contains(int value) {
        return binary_search(elements.begin(), elements.end(), value);
    }

    // Remove an element from the set
    void erase(int value) {
        auto it = lower_bound(elements.begin(), elements.end(), value);
        if (it != elements.end() && *it == value) {
            elements.erase(it);
        }
    }

    // Get the size of the set
    size_t size() const {
        return elements.size();
    }

    // Print all elements in the set
    void print() const {
        for (int x : elements) {
            std::cout << x << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    SimpleSet mySet;

    mySet.insert(10);
    mySet.insert(20);
    mySet.insert(30);
    mySet.insert(10); // Duplicate element, will not be inserted

    if (mySet.contains(20)) {
        std::cout << "20 is in the set" << std::endl;
    } else {
        std::cout << "20 is not in the set" << std::endl;
    }

    mySet.print();

    mySet.erase(20);

    std::cout << "Size of the set: " << mySet.size() << std::endl;

    mySet.print();

    return 0;
}
```

用 linked list 實作

```cpp=
```cpp=
#include <iostream>

template <typename T>
class Set {
private:
    struct Node {
        T data;
        Node* next;
        Node(T val) : data(val), next(nullptr) {}
    };

    Node* head;

    bool containsNode(const T& val) const {
        Node* current = head;
        while (current != nullptr) {
            if (current->data == val) {
                return true;
            }
            current = current->next;
        }
        return false;
    }

public:
    Set() : head(nullptr) {}

    ~Set() {
        while (head != nullptr) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

    void insert(const T& val) {
        if (!containsNode(val)) {
            Node* newNode = new Node(val);
            newNode->next = head;
            head = newNode;
        }
    }

    void remove(const T& val) {
        Node* current = head;
        Node* prev = nullptr;
        while (current != nullptr) {
            if (current->data == val) {
                if (prev == nullptr) {
                    head = current->next;
                } else {
                    prev->next = current->next;
                }
                delete current;
                return;
            }
            prev = current;
            current = current->next;
        }
    }

    bool contains(const T& val) const {
        return containsNode(val);
    }

    void display() const {
        Node* current = head;
        while (current != nullptr) {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }
};

int main() {
    Set<int> mySet;

    mySet.insert(10);
    mySet.insert(20);
    mySet.insert(30);

    std::cout << "Set contains: ";
    mySet.display();

    mySet.remove(20);

    std::cout << "Set after removing 20: ";
    mySet.display();

    std::cout << "Set contains 10: " << (mySet.contains(10) ? "Yes" : "No") << std::endl;
    std::cout << "Set contains 20: " << (mySet.contains(20) ? "Yes" : "No") << std::endl;

    return 0;
}
```

```