# Linked List

實作一個 linked list，包含下列方法：
- insertAtBeginning()
- insertAtEnd()
- deleteNode()
- display()

```cpp=
#include <iostream>

using namespace std;

class LinkedList {
private:
    struct Node {
        int data;
        Node* next;
        Node(int val) : data(val), next(nullptr) {}
    };
    Node* head;
public:
    LinkedList() : head(nullptr) {}
    ~LinkedList() {
        Node* cur = head;
        while (cur) {
            Node* temp = cur->next;
            // 刪除目前的 pointer
            delete cur;
            // 移動 cur pointer
            cur = temp;
        }
        head = nullptr;
    }
    
    // 加到 linked list 前面
    void insertAtBeginning(int val) {
        // 建立一個新的 node
        Node* newNode = new Node(val);
        
        // newNode->next 為 head
        newNode->next = head;
        
        // 接到 head 上
        head = newNode;
    }
    
    // 加到 linked list 後面
    void insertAtEnd(int val) {
        // 一樣先建立一個 node
        Node* newNode = new Node(val);
        
        // 如果 head 不存在的話，接到 head 上
        if (!head) {
            head = newNode;
            return;
        }
        // linked list 的特性
        // 只能走訪到最後一個 node
        // 先用一個暫時的指標 temp 指到 head
        Node* temp = head;
        while (temp->next) {
            // 移動到最末端
            temp = temp->next;
        }
        // 接到最後面
        temp->next = newNode;
    }    

    void deleteNode(int val) {
        // 如果 head 不存在，return
        if(!head) return;

        // 如果 head 是要被 delete 的 node
        // 刪除那個 node
        if (head->data == val) {
            Node* temp = head;
            // 移動 head pointer
            head = head->next;
            delete temp;
            return;
        }
        
        // 如果不是的話，繼續找 node
        Node* cur = head;
        // 建立一個 prev dummy node
        Node* prev = nullptr;
        while (cur && cur->data != val) {
            // 將 cur 接到 prev 上
            prev = cur;
            cur = cur->next;
        }
        
        // 如果沒找到的話 return
        if (!cur) return;
        
        // update the pointer for prev
        prev->next = cur->next;
        delete cur;
    }
    void display() {
        // 用一個 temp pointer 指到 head
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        std::cout << "NULL" << std::endl;
    }
};

int main() {
    LinkedList list;
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtBeginning(5);
    list.insertAtEnd(30);

    std::cout << "Linked List: ";
    list.display();

    std::cout << "Deleting node with value 20" << std::endl;
    list.deleteNode(20);
    list.display();

    return 0;
}
```
