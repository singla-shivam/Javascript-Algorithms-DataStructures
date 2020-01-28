#Doubly Linked List
A doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes.
Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.

The two node links allow traversal of the list in either direction.
While adding or removing a node in a doubly linked list requires changing more links than the same operations on a singly linked list,
the operations are simpler and potentially more efficient (for nodes other than first- nodes) because there is no need to keep track of the previous node during traversal or no need to traverse the list to find the previous node,
so that its link can be modified.
