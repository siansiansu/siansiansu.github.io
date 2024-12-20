# Queue

實作一個 queue，方法包含：
- push()
- pop()
- front()

使用 linked list 實作

```cpp=
#include <iostream>

using namespace std;

template <typename T>

class Queue {
private:
    // 定義 node 結構
    struct Node {
        T data;
        Node* next;
        Node(T val) : data(val), next(nullptr) {}
    };

    Node* frontPtr;
    Node* rearPtr;

public:
    // construct queue
    Queue() : frontPtr(nullptr), rearPtr(nullptr) {}

    // de-construct queue
    ~Queue() {
        while (frontPtr) {
            // 刪刪刪，刪到最後一個值
            Node* temp = frontPtr;
            frontPtr = frontPtr->next;
            delete temp;
        }
        // 刪到最後一個值再給 rearPtr nullptr
        rearPtr = nullptr;
    }
    
    
    void push(const T& val) {
        // 建立一個 node
        Node* newNode = new Node(val);

        if (!frontPtr) {
            // 如果是空的話，frontPtr = newNode
            // 接在 frontPtr 上
            frontPtr = newNode;
        } else {
            // 如果不是空的，rearPtr->next = newNode
            // 接在 rearPtr->next 上
            rearPtr->next = newNode;
        }
        // rearPtr = newNode
        rearPtr = newNode;
    }

    void pop() {
        // 如果沒有 frontPtr，return error
        if (!frontPtr) {
            cerr << "Queue is empty. Cannot pop.\n";
            return;
        }
        Node* temp = frontPtr;
        
        // 指到下一個節點
        frontPtr = frontPtr->next;
        
        // 刪除 temp
        delete temp;
        
        // 如果 frontPtr 刪完了，刪 rearPtr
        if (!frontPtr) {
            rearPtr = nullptr;
        }
    }

    T front() const {
        if (!frontPtr) {
            cerr << "Queue is empty. No front element.\n";
            exit(EXIT_FAILURE);
        }
        return frontPtr->data;
    }
};

int main() {
    Queue<int> myQueue;

    myQueue.push(10);
    myQueue.push(20);
    myQueue.push(30);

    std::cout << "Front element: " << myQueue.front() << std::endl;

    myQueue.pop();

    std::cout << "Front element after pop: " << myQueue.front() << std::endl;

    return 0;
}
```
