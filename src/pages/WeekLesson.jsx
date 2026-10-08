import React, { useState } from 'react';

const WeekLesson = ({ weekNum, user, onNavigate, onExerciseComplete, onLogout }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const weekData = {
    1: {
      titleEn: "Introduction to Data Structures",
      titleAr: "مقدمة في هياكل البيانات",
      icon: "📊",
      video: {
        title: "What are Data Structures?",
        titleAr: "ما هي هياكل البيانات؟",
        youtubeId: "bum_19loj9A",
        description: "Learn the fundamentals of data structures and why they matter."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 1!",
          titleAr: "مرحباً بك في الأسبوع الأول!",
          contentEn: "Data structures are ways of organizing and storing data so that they can be accessed and modified efficiently.",
          contentAr: "هياكل البيانات هي طرق لتنظيم وتخزين البيانات بحيث يمكن الوصول إليها وتعديلها بكفاءة."
        },
        {
          type: "concept",
          titleEn: "Why Data Structures Matter",
          titleAr: "لماذا هياكل البيانات مهمة",
          contentEn: "Choosing the right data structure can make your program faster and more efficient.",
          contentAr: "اختيار هيكل البيانات الصحيح يمكن أن يجعل برنامجك أسرع وأكثر كفاءة.",
          keyPoints: [
            { en: "Efficient data access and modification", ar: "وصول وتعديل فعال للبيانات" },
            { en: "Better memory utilization", ar: "استخدام أفضل للذاكرة" },
            { en: "Easier code maintenance", ar: "صيانة أسهل للكود" },
            { en: "Foundation for algorithms", ar: "أساس للخوارزميات" }
          ]
        },
        {
          type: "concept",
          titleEn: "Types of Data Structures",
          titleAr: "أنواع هياكل البيانات",
          contentEn: "Data structures are classified into linear and non-linear types.",
          contentAr: "تُصنف هياكل البيانات إلى أنواع خطية وغير خطية.",
          keyPoints: [
            { en: "Linear: Arrays, Linked Lists, Stacks, Queues", ar: "خطية: المصفوفات، القوائم المترابطة، المكدسات، الطوابير" },
            { en: "Non-linear: Trees, Graphs", ar: "غير خطية: الأشجار، الرسوم البيانية" },
            { en: "Hash-based: Hash Tables", ar: "مبنية على التجزئة: جداول التجزئة" }
          ]
        }
      ],
      exercises: [
        { q: "What is a data structure?", qAr: "ما هو هيكل البيانات؟", options: ["A programming language", "A way to organize data", "A type of computer", "A software application"], correct: 1 },
        { q: "Which is a linear data structure?", qAr: "أي من التالي هيكل بيانات خطي؟", options: ["Tree", "Graph", "Array", "Hash Table"], correct: 2 },
        { q: "Why are data structures important?", qAr: "لماذا هياكل البيانات مهمة؟", options: ["For decoration", "For efficient data handling", "For printing", "For deleting files"], correct: 1 },
        { q: "Which is a non-linear structure?", qAr: "أي من التالي هيكل غير خطي؟", options: ["Array", "Stack", "Queue", "Tree"], correct: 3 },
        { q: "Data structures help with:", qAr: "هياكل البيانات تساعد في:", options: ["Slow programs", "Efficient algorithms", "More bugs", "Larger files"], correct: 1 }
      ]
    },
    2: {
      titleEn: "Arrays",
      titleAr: "المصفوفات",
      icon: "📦",
      video: {
        title: "Arrays in Data Structures",
        titleAr: "المصفوفات في هياكل البيانات",
        youtubeId: "QJNwK2uJyGs",
        description: "Understanding arrays and their operations."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 2!",
          titleAr: "مرحباً بك في الأسبوع الثاني!",
          contentEn: "Arrays are the simplest and most widely used data structure. They store elements in contiguous memory locations.",
          contentAr: "المصفوفات هي أبسط هياكل البيانات وأكثرها استخداماً. تخزن العناصر في مواقع ذاكرة متجاورة."
        },
        {
          type: "code",
          titleEn: "Array Declaration",
          titleAr: "تعريف المصفوفة",
          code: `// Array declaration in different languages
// C/C++
int arr[5] = {1, 2, 3, 4, 5};

// Java
int[] arr = {1, 2, 3, 4, 5};

// Python
arr = [1, 2, 3, 4, 5]

// JavaScript
let arr = [1, 2, 3, 4, 5];`,
          explanation: "Arrays have a fixed size and store elements of the same type.",
          explanationAr: "المصفوفات لها حجم ثابت وتخزن عناصر من نفس النوع."
        },
        {
          type: "concept",
          titleEn: "Array Operations",
          titleAr: "عمليات المصفوفة",
          contentEn: "Common operations on arrays include accessing, inserting, deleting, and searching.",
          contentAr: "العمليات الشائعة على المصفوفات تشمل الوصول، الإدراج، الحذف، والبحث.",
          keyPoints: [
            { en: "Access: O(1) - Direct index access", ar: "الوصول: O(1) - وصول مباشر بالفهرس" },
            { en: "Insert: O(n) - May need to shift elements", ar: "الإدراج: O(n) - قد يحتاج إزاحة العناصر" },
            { en: "Delete: O(n) - May need to shift elements", ar: "الحذف: O(n) - قد يحتاج إزاحة العناصر" },
            { en: "Search: O(n) - Linear search", ar: "البحث: O(n) - بحث خطي" }
          ]
        }
      ],
      exercises: [
        { q: "Array index starts from:", qAr: "فهرس المصفوفة يبدأ من:", options: ["1", "0", "-1", "Any number"], correct: 1 },
        { q: "Array access time complexity:", qAr: "تعقيد وقت الوصول للمصفوفة:", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "Arrays store elements in:", qAr: "المصفوفات تخزن العناصر في:", options: ["Random memory", "Contiguous memory", "External storage", "Cache only"], correct: 1 },
        { q: "Inserting in middle of array:", qAr: "الإدراج في منتصف المصفوفة:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "Array size is:", qAr: "حجم المصفوفة:", options: ["Dynamic", "Fixed at creation", "Unlimited", "Random"], correct: 1 }
      ]
    },
    3: {
      titleEn: "Linked Lists (Part 1)",
      titleAr: "القوائم المترابطة (1)",
      icon: "🔗",
      video: {
        title: "Introduction to Linked Lists",
        titleAr: "مقدمة في القوائم المترابطة",
        youtubeId: "N6dOwBde7-M",
        description: "Learn about linked lists and their structure."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 3!",
          titleAr: "مرحباً بك في الأسبوع الثالث!",
          contentEn: "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next.",
          contentAr: "القائمة المترابطة هي هيكل بيانات خطي حيث تُخزن العناصر في عقد، وكل عقدة تشير إلى التالية."
        },
        {
          type: "code",
          titleEn: "Node Structure",
          titleAr: "هيكل العقدة",
          code: `// Node structure
class Node {
    int data;       // Data stored in node
    Node next;      // Pointer to next node
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List
class LinkedList {
    Node head;      // Points to first node
    
    LinkedList() {
        head = null;
    }
}`,
          explanation: "Each node contains data and a reference to the next node.",
          explanationAr: "كل عقدة تحتوي على بيانات ومرجع للعقدة التالية."
        },
        {
          type: "concept",
          titleEn: "Linked List vs Array",
          titleAr: "القائمة المترابطة مقابل المصفوفة",
          contentEn: "Linked lists have different trade-offs compared to arrays.",
          contentAr: "القوائم المترابطة لها مقايضات مختلفة مقارنة بالمصفوفات.",
          keyPoints: [
            { en: "Dynamic size - can grow/shrink", ar: "حجم ديناميكي - يمكن أن يزيد/ينقص" },
            { en: "No wasted memory for empty slots", ar: "لا ذاكرة مهدرة للفتحات الفارغة" },
            { en: "Insertion/Deletion: O(1) at head", ar: "الإدراج/الحذف: O(1) في الرأس" },
            { en: "Access: O(n) - must traverse", ar: "الوصول: O(n) - يجب التنقل" }
          ]
        }
      ],
      exercises: [
        { q: "Each node in linked list has:", qAr: "كل عقدة في القائمة المترابطة لها:", options: ["Only data", "Only pointer", "Data and pointer", "Nothing"], correct: 2 },
        { q: "Head points to:", qAr: "الرأس يشير إلى:", options: ["Last node", "First node", "Middle node", "Null"], correct: 1 },
        { q: "Linked list access time:", qAr: "وقت الوصول للقائمة المترابطة:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "Insert at head time:", qAr: "وقت الإدراج في الرأس:", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "Linked list size is:", qAr: "حجم القائمة المترابطة:", options: ["Fixed", "Dynamic", "Always 10", "Undefined"], correct: 1 }
      ]
    },
    4: {
      titleEn: "Linked Lists (Part 2)",
      titleAr: "القوائم المترابطة (2)",
      icon: "⛓️",
      video: {
        title: "Linked List Operations",
        titleAr: "عمليات القوائم المترابطة",
        youtubeId: "HKfj0l7ndbc",
        description: "Insertion, deletion and traversal in linked lists."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 4!",
          titleAr: "مرحباً بك في الأسبوع الرابع!",
          contentEn: "Learn about different types of linked lists and their operations.",
          contentAr: "تعلم عن أنواع القوائم المترابطة المختلفة وعملياتها."
        },
        {
          type: "code",
          titleEn: "Insert at Beginning",
          titleAr: "الإدراج في البداية",
          code: `void insertAtHead(int data) {
    Node newNode = new Node(data);
    newNode.next = head;  // Point new node to current head
    head = newNode;       // Update head to new node
}

// Insert at End
void insertAtEnd(int data) {
    Node newNode = new Node(data);
    if (head == null) {
        head = newNode;
        return;
    }
    Node temp = head;
    while (temp.next != null) {
        temp = temp.next;
    }
    temp.next = newNode;
}`,
          explanation: "Insert at head is O(1), insert at end is O(n).",
          explanationAr: "الإدراج في الرأس O(1)، الإدراج في النهاية O(n)."
        },
        {
          type: "concept",
          titleEn: "Types of Linked Lists",
          titleAr: "أنواع القوائم المترابطة",
          contentEn: "There are several variations of linked lists.",
          contentAr: "هناك عدة أنواع من القوائم المترابطة.",
          keyPoints: [
            { en: "Singly Linked List: One direction", ar: "قائمة مترابطة أحادية: اتجاه واحد" },
            { en: "Doubly Linked List: Two directions", ar: "قائمة مترابطة ثنائية: اتجاهان" },
            { en: "Circular Linked List: Last points to first", ar: "قائمة مترابطة دائرية: الأخيرة تشير للأولى" }
          ]
        }
      ],
      exercises: [
        { q: "Singly linked list traverses:", qAr: "القائمة المترابطة الأحادية تتنقل:", options: ["Both directions", "Forward only", "Backward only", "No direction"], correct: 1 },
        { q: "Doubly linked list has:", qAr: "القائمة المترابطة الثنائية لها:", options: ["One pointer", "Two pointers", "No pointers", "Three pointers"], correct: 1 },
        { q: "In circular list, last node points to:", qAr: "في القائمة الدائرية، العقدة الأخيرة تشير إلى:", options: ["Null", "First node", "Itself", "Random node"], correct: 1 },
        { q: "Delete from head:", qAr: "الحذف من الرأس:", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "To reverse a linked list:", qAr: "لعكس قائمة مترابطة:", options: ["O(1)", "O(n)", "O(log n)", "Not possible"], correct: 1 }
      ]
    },
    5: {
      titleEn: "Stacks",
      titleAr: "المكدسات",
      icon: "📚",
      video: {
        title: "Stack Data Structure",
        titleAr: "هيكل بيانات المكدس",
        youtubeId: "I37kGX-nZEI",
        description: "Understanding stacks and LIFO principle."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 5!",
          titleAr: "مرحباً بك في الأسبوع الخامس!",
          contentEn: "A stack is a LIFO (Last In First Out) data structure. Think of a stack of plates!",
          contentAr: "المكدس هو هيكل بيانات LIFO (آخر داخل أول خارج). فكر في كومة من الأطباق!"
        },
        {
          type: "code",
          titleEn: "Stack Operations",
          titleAr: "عمليات المكدس",
          code: `class Stack {
    int[] arr;
    int top;
    int capacity;
    
    // Push - Add element to top
    void push(int x) {
        if (top == capacity - 1) {
            System.out.println("Stack Overflow!");
            return;
        }
        arr[++top] = x;
    }
    
    // Pop - Remove element from top
    int pop() {
        if (top == -1) {
            System.out.println("Stack Underflow!");
            return -1;
        }
        return arr[top--];
    }
    
    // Peek - View top element
    int peek() {
        if (top == -1) return -1;
        return arr[top];
    }
}`,
          explanation: "Push, Pop, and Peek are all O(1) operations.",
          explanationAr: "Push و Pop و Peek كلها عمليات O(1)."
        },
        {
          type: "concept",
          titleEn: "Stack Applications",
          titleAr: "تطبيقات المكدس",
          contentEn: "Stacks are used in many important applications.",
          contentAr: "المكدسات تُستخدم في العديد من التطبيقات المهمة.",
          keyPoints: [
            { en: "Function call stack", ar: "مكدس استدعاء الدوال" },
            { en: "Undo/Redo operations", ar: "عمليات التراجع/الإعادة" },
            { en: "Expression evaluation", ar: "تقييم التعبيرات" },
            { en: "Balanced parentheses check", ar: "فحص الأقواس المتوازنة" }
          ]
        }
      ],
      exercises: [
        { q: "Stack follows:", qAr: "المكدس يتبع:", options: ["FIFO", "LIFO", "Random", "Sorted"], correct: 1 },
        { q: "Push adds element to:", qAr: "Push يضيف عنصر إلى:", options: ["Bottom", "Middle", "Top", "Random position"], correct: 2 },
        { q: "Pop removes from:", qAr: "Pop يحذف من:", options: ["Bottom", "Top", "Middle", "Both ends"], correct: 1 },
        { q: "Time complexity of push:", qAr: "تعقيد وقت push:", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "Stack overflow occurs when:", qAr: "طفح المكدس يحدث عندما:", options: ["Stack is empty", "Stack is full", "Pop from empty", "Never"], correct: 1 }
      ]
    },
    6: {
      titleEn: "Queues",
      titleAr: "الطوابير",
      icon: "🚶",
      video: {
        title: "Queue Data Structure",
        titleAr: "هيكل بيانات الطابور",
        youtubeId: "D6gu-_tmEpQ",
        description: "Understanding queues and FIFO principle."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 6!",
          titleAr: "مرحباً بك في الأسبوع السادس!",
          contentEn: "A queue is a FIFO (First In First Out) data structure. Like a line at a ticket counter!",
          contentAr: "الطابور هو هيكل بيانات FIFO (أول داخل أول خارج). مثل صف في شباك التذاكر!"
        },
        {
          type: "code",
          titleEn: "Queue Operations",
          titleAr: "عمليات الطابور",
          code: `class Queue {
    int[] arr;
    int front, rear, capacity;
    
    // Enqueue - Add to rear
    void enqueue(int x) {
        if (rear == capacity - 1) {
            System.out.println("Queue is full!");
            return;
        }
        arr[++rear] = x;
    }
    
    // Dequeue - Remove from front
    int dequeue() {
        if (front > rear) {
            System.out.println("Queue is empty!");
            return -1;
        }
        return arr[front++];
    }
    
    // Front - View front element
    int front() {
        if (front > rear) return -1;
        return arr[front];
    }
}`,
          explanation: "Enqueue and Dequeue are O(1) operations.",
          explanationAr: "Enqueue و Dequeue عمليات O(1)."
        },
        {
          type: "concept",
          titleEn: "Types of Queues",
          titleAr: "أنواع الطوابير",
          contentEn: "Different queue variations for different use cases.",
          contentAr: "أنواع مختلفة من الطوابير لحالات استخدام مختلفة.",
          keyPoints: [
            { en: "Simple Queue: Basic FIFO", ar: "طابور بسيط: FIFO أساسي" },
            { en: "Circular Queue: Wraps around", ar: "طابور دائري: يلتف حول" },
            { en: "Priority Queue: By priority", ar: "طابور الأولوية: حسب الأولوية" },
            { en: "Double-ended Queue (Deque)", ar: "طابور ثنائي الطرف" }
          ]
        }
      ],
      exercises: [
        { q: "Queue follows:", qAr: "الطابور يتبع:", options: ["LIFO", "FIFO", "Random", "Sorted"], correct: 1 },
        { q: "Enqueue adds to:", qAr: "Enqueue يضيف إلى:", options: ["Front", "Rear", "Middle", "Both"], correct: 1 },
        { q: "Dequeue removes from:", qAr: "Dequeue يحذف من:", options: ["Rear", "Front", "Middle", "Both"], correct: 1 },
        { q: "Circular queue advantage:", qAr: "ميزة الطابور الدائري:", options: ["Faster", "Uses space efficiently", "Smaller", "None"], correct: 1 },
        { q: "Priority queue orders by:", qAr: "طابور الأولوية يرتب حسب:", options: ["Insertion time", "Priority value", "Random", "Size"], correct: 1 }
      ]
    },
    7: {
      titleEn: "Trees (Part 1) - Binary Trees",
      titleAr: "الأشجار (1) - الأشجار الثنائية",
      icon: "🌲",
      video: {
        title: "Binary Trees Introduction",
        titleAr: "مقدمة في الأشجار الثنائية",
        youtubeId: "oSWTXtMglKE",
        description: "Understanding binary trees and their properties."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 7!",
          titleAr: "مرحباً بك في الأسبوع السابع!",
          contentEn: "A tree is a hierarchical data structure. A binary tree has at most two children per node.",
          contentAr: "الشجرة هي هيكل بيانات هرمي. الشجرة الثنائية لديها طفلان على الأكثر لكل عقدة."
        },
        {
          type: "code",
          titleEn: "Binary Tree Node",
          titleAr: "عقدة الشجرة الثنائية",
          code: `class TreeNode {
    int data;
    TreeNode left;   // Left child
    TreeNode right;  // Right child
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Example tree:
//       1
//      / \\
//     2   3
//    / \\
//   4   5`,
          explanation: "Each node has at most two children: left and right.",
          explanationAr: "كل عقدة لها طفلان على الأكثر: يسار ويمين."
        },
        {
          type: "concept",
          titleEn: "Tree Terminology",
          titleAr: "مصطلحات الشجرة",
          contentEn: "Important terms to understand trees.",
          contentAr: "مصطلحات مهمة لفهم الأشجار.",
          keyPoints: [
            { en: "Root: Top node (no parent)", ar: "الجذر: العقدة العليا (بدون أب)" },
            { en: "Leaf: Node with no children", ar: "الورقة: عقدة بدون أطفال" },
            { en: "Height: Longest path to leaf", ar: "الارتفاع: أطول مسار للورقة" },
            { en: "Depth: Distance from root", ar: "العمق: المسافة من الجذر" }
          ]
        }
      ],
      exercises: [
        { q: "Binary tree max children per node:", qAr: "أقصى عدد أطفال لعقدة في شجرة ثنائية:", options: ["1", "2", "3", "Unlimited"], correct: 1 },
        { q: "Root node has:", qAr: "عقدة الجذر لها:", options: ["No parent", "No children", "One parent", "Two parents"], correct: 0 },
        { q: "Leaf node has:", qAr: "عقدة الورقة لها:", options: ["Two children", "One child", "No children", "Many children"], correct: 2 },
        { q: "Full binary tree means:", qAr: "الشجرة الثنائية الكاملة تعني:", options: ["0 or 2 children", "Always 2 children", "No children", "1 child only"], correct: 0 },
        { q: "Height of single node tree:", qAr: "ارتفاع شجرة عقدة واحدة:", options: ["0", "1", "2", "Undefined"], correct: 0 }
      ]
    },
    8: {
      titleEn: "Trees (Part 2) - BST",
      titleAr: "الأشجار (2) - شجرة البحث الثنائية",
      icon: "🌳",
      video: {
        title: "Binary Search Tree",
        titleAr: "شجرة البحث الثنائية",
        youtubeId: "cySVml6e_Fc",
        description: "Learn about Binary Search Trees and their operations."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 8!",
          titleAr: "مرحباً بك في الأسبوع الثامن!",
          contentEn: "A BST is a binary tree where left child < parent < right child. This property enables efficient searching.",
          contentAr: "شجرة البحث الثنائية هي شجرة ثنائية حيث الطفل الأيسر < الأب < الطفل الأيمن. هذه الخاصية تمكّن البحث الفعال."
        },
        {
          type: "code",
          titleEn: "BST Search",
          titleAr: "البحث في BST",
          code: `// Search in BST
TreeNode search(TreeNode root, int key) {
    // Base case: root is null or key found
    if (root == null || root.data == key)
        return root;
    
    // Key is greater than root's data
    if (key > root.data)
        return search(root.right, key);
    
    // Key is smaller than root's data
    return search(root.left, key);
}

// Time Complexity: O(log n) average, O(n) worst`,
          explanation: "BST search is efficient due to the ordering property.",
          explanationAr: "البحث في BST فعال بسبب خاصية الترتيب."
        },
        {
          type: "concept",
          titleEn: "BST Operations Time Complexity",
          titleAr: "تعقيد وقت عمليات BST",
          contentEn: "BST operations depend on tree height.",
          contentAr: "عمليات BST تعتمد على ارتفاع الشجرة.",
          keyPoints: [
            { en: "Search: O(log n) average, O(n) worst", ar: "البحث: O(log n) متوسط، O(n) أسوأ" },
            { en: "Insert: O(log n) average", ar: "الإدراج: O(log n) متوسط" },
            { en: "Delete: O(log n) average", ar: "الحذف: O(log n) متوسط" },
            { en: "Balanced BST: O(log n) guaranteed", ar: "BST متوازنة: O(log n) مضمون" }
          ]
        }
      ],
      exercises: [
        { q: "In BST, left child is:", qAr: "في BST، الطفل الأيسر:", options: ["Greater than parent", "Less than parent", "Equal to parent", "Random"], correct: 1 },
        { q: "BST search average time:", qAr: "متوسط وقت البحث في BST:", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correct: 2 },
        { q: "Inorder traversal of BST gives:", qAr: "التجول بالترتيب الداخلي لـ BST يعطي:", options: ["Random order", "Sorted order", "Reverse order", "Level order"], correct: 1 },
        { q: "Worst case BST is like:", qAr: "أسوأ حالة BST تشبه:", options: ["Balanced tree", "Linked list", "Array", "Hash table"], correct: 1 },
        { q: "To delete node with 2 children:", qAr: "لحذف عقدة بطفلين:", options: ["Just remove", "Replace with successor", "Not possible", "Remove both children"], correct: 1 }
      ]
    },
    9: {
      titleEn: "Heaps & Priority Queues",
      titleAr: "الكومة وطوابير الأولوية",
      icon: "⛰️",
      video: {
        title: "Heap Data Structure",
        titleAr: "هيكل بيانات الكومة",
        youtubeId: "t0Cq6tVNRBA",
        description: "Understanding heaps and priority queues."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 9!",
          titleAr: "مرحباً بك في الأسبوع التاسع!",
          contentEn: "A heap is a complete binary tree that satisfies the heap property. Max-heap: parent ≥ children. Min-heap: parent ≤ children.",
          contentAr: "الكومة هي شجرة ثنائية كاملة تحقق خاصية الكومة. كومة عظمى: الأب ≥ الأطفال. كومة صغرى: الأب ≤ الأطفال."
        },
        {
          type: "code",
          titleEn: "Heap Operations",
          titleAr: "عمليات الكومة",
          code: `// Max-Heap using array
// Parent: (i-1)/2
// Left child: 2*i + 1
// Right child: 2*i + 2

void insert(int value) {
    heap[size] = value;
    int i = size;
    size++;
    
    // Heapify up
    while (i > 0 && heap[(i-1)/2] < heap[i]) {
        swap(heap[(i-1)/2], heap[i]);
        i = (i-1)/2;
    }
}

int extractMax() {
    int max = heap[0];
    heap[0] = heap[size-1];
    size--;
    heapifyDown(0);
    return max;
}`,
          explanation: "Insert and extract operations are O(log n).",
          explanationAr: "عمليات الإدراج والاستخراج هي O(log n)."
        },
        {
          type: "concept",
          titleEn: "Heap Applications",
          titleAr: "تطبيقات الكومة",
          contentEn: "Heaps are used in many algorithms.",
          contentAr: "الكومة تُستخدم في العديد من الخوارزميات.",
          keyPoints: [
            { en: "Priority Queue implementation", ar: "تنفيذ طابور الأولوية" },
            { en: "Heap Sort: O(n log n)", ar: "ترتيب الكومة: O(n log n)" },
            { en: "Finding k largest/smallest", ar: "إيجاد k أكبر/أصغر" },
            { en: "Dijkstra's algorithm", ar: "خوارزمية ديكسترا" }
          ]
        }
      ],
      exercises: [
        { q: "In max-heap, root is:", qAr: "في الكومة العظمى، الجذر هو:", options: ["Minimum", "Maximum", "Random", "Middle"], correct: 1 },
        { q: "Heap is a:", qAr: "الكومة هي:", options: ["Complete binary tree", "BST", "Linked list", "Array"], correct: 0 },
        { q: "Insert in heap time:", qAr: "وقت الإدراج في الكومة:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 2 },
        { q: "Extract max time:", qAr: "وقت استخراج الأكبر:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 2 },
        { q: "Priority queue uses:", qAr: "طابور الأولوية يستخدم:", options: ["Stack", "Heap", "Array only", "Linked list"], correct: 1 }
      ]
    },
    10: {
      titleEn: "Hashing & Hash Tables",
      titleAr: "التجزئة وجداول التجزئة",
      icon: "#️⃣",
      video: {
        title: "Hash Tables Explained",
        titleAr: "شرح جداول التجزئة",
        youtubeId: "shs0KM3wKv8",
        description: "Learn about hashing and hash table implementation."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 10!",
          titleAr: "مرحباً بك في الأسبوع العاشر!",
          contentEn: "Hash tables provide O(1) average time for insert, delete, and search by using a hash function.",
          contentAr: "جداول التجزئة توفر وقت O(1) متوسط للإدراج والحذف والبحث باستخدام دالة التجزئة."
        },
        {
          type: "code",
          titleEn: "Hash Function Example",
          titleAr: "مثال على دالة التجزئة",
          code: `// Simple hash function
int hash(int key, int tableSize) {
    return key % tableSize;
}

// Hash table with chaining
class HashTable {
    LinkedList[] table;
    int size;
    
    void insert(int key) {
        int index = hash(key, size);
        table[index].add(key);
    }
    
    boolean search(int key) {
        int index = hash(key, size);
        return table[index].contains(key);
    }
}`,
          explanation: "Hash function maps keys to array indices.",
          explanationAr: "دالة التجزئة تربط المفاتيح بفهارس المصفوفة."
        },
        {
          type: "concept",
          titleEn: "Collision Handling",
          titleAr: "معالجة التصادم",
          contentEn: "When two keys hash to same index, we have a collision.",
          contentAr: "عندما يُجزّأ مفتاحان لنفس الفهرس، لدينا تصادم.",
          keyPoints: [
            { en: "Chaining: Linked list at each slot", ar: "التسلسل: قائمة مترابطة في كل فتحة" },
            { en: "Open Addressing: Find next empty slot", ar: "العنونة المفتوحة: إيجاد الفتحة الفارغة التالية" },
            { en: "Linear Probing: Check next slot", ar: "الفحص الخطي: فحص الفتحة التالية" },
            { en: "Quadratic Probing: Check i² slots ahead", ar: "الفحص التربيعي: فحص i² فتحات للأمام" }
          ]
        }
      ],
      exercises: [
        { q: "Hash table average search time:", qAr: "متوسط وقت البحث في جدول التجزئة:", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correct: 1 },
        { q: "Collision occurs when:", qAr: "التصادم يحدث عندما:", options: ["Table is empty", "Two keys hash to same index", "Key not found", "Table is full"], correct: 1 },
        { q: "Chaining uses:", qAr: "التسلسل يستخدم:", options: ["Arrays", "Linked lists", "Trees", "Stacks"], correct: 1 },
        { q: "Load factor is:", qAr: "عامل التحميل هو:", options: ["Size of table", "Number of keys / Table size", "Hash value", "Collision count"], correct: 1 },
        { q: "Good hash function should:", qAr: "دالة التجزئة الجيدة يجب أن:", options: ["Cause collisions", "Distribute evenly", "Be slow", "Return same value"], correct: 1 }
      ]
    },
    11: {
      titleEn: "Graphs (Part 1)",
      titleAr: "الرسوم البيانية (1)",
      icon: "🕸️",
      video: {
        title: "Introduction to Graphs",
        titleAr: "مقدمة في الرسوم البيانية",
        youtubeId: "gXgEDyodOJU",
        description: "Understanding graphs and their representations."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 11!",
          titleAr: "مرحباً بك في الأسبوع الحادي عشر!",
          contentEn: "A graph is a non-linear data structure consisting of vertices (nodes) and edges (connections).",
          contentAr: "الرسم البياني هو هيكل بيانات غير خطي يتكون من رؤوس (عقد) وحواف (اتصالات)."
        },
        {
          type: "code",
          titleEn: "Graph Representations",
          titleAr: "تمثيلات الرسم البياني",
          code: `// Adjacency Matrix
int[][] adjMatrix = new int[V][V];
// adjMatrix[i][j] = 1 if edge exists

// Adjacency List
List<List<Integer>> adjList = new ArrayList<>();
// adjList.get(i) contains neighbors of vertex i

// Example: Graph with edges 0-1, 0-2, 1-2
// Matrix:     List:
//   0 1 2     0: [1, 2]
// 0[0 1 1]    1: [0, 2]
// 1[1 0 1]    2: [0, 1]
// 2[1 1 0]`,
          explanation: "Matrix: O(V²) space. List: O(V+E) space.",
          explanationAr: "المصفوفة: O(V²) مساحة. القائمة: O(V+E) مساحة."
        },
        {
          type: "concept",
          titleEn: "Types of Graphs",
          titleAr: "أنواع الرسوم البيانية",
          contentEn: "Graphs can be classified in several ways.",
          contentAr: "الرسوم البيانية يمكن تصنيفها بعدة طرق.",
          keyPoints: [
            { en: "Directed vs Undirected", ar: "موجه مقابل غير موجه" },
            { en: "Weighted vs Unweighted", ar: "موزون مقابل غير موزون" },
            { en: "Cyclic vs Acyclic", ar: "دوري مقابل لا دوري" },
            { en: "Connected vs Disconnected", ar: "متصل مقابل منفصل" }
          ]
        }
      ],
      exercises: [
        { q: "Graph consists of:", qAr: "الرسم البياني يتكون من:", options: ["Only vertices", "Only edges", "Vertices and edges", "Arrays"], correct: 2 },
        { q: "Adjacency matrix space:", qAr: "مساحة مصفوفة التجاور:", options: ["O(V)", "O(E)", "O(V²)", "O(V+E)"], correct: 2 },
        { q: "Adjacency list space:", qAr: "مساحة قائمة التجاور:", options: ["O(V²)", "O(V+E)", "O(E)", "O(1)"], correct: 1 },
        { q: "In directed graph:", qAr: "في الرسم البياني الموجه:", options: ["Edges have direction", "No direction", "Self loops only", "No edges"], correct: 0 },
        { q: "Tree is a graph that is:", qAr: "الشجرة هي رسم بياني:", options: ["Cyclic", "Acyclic connected", "Disconnected", "Weighted"], correct: 1 }
      ]
    },
    12: {
      titleEn: "Graphs (Part 2)",
      titleAr: "الرسوم البيانية (2)",
      icon: "🗺️",
      video: {
        title: "Graph Traversal - BFS & DFS",
        titleAr: "تجول الرسم البياني - BFS و DFS",
        youtubeId: "pcKY4hjDrxk",
        description: "Learn BFS and DFS traversal algorithms."
      },
      content: [
        {
          type: "intro",
          titleEn: "Welcome to Week 12!",
          titleAr: "مرحباً بك في الأسبوع الثاني عشر!",
          contentEn: "Learn graph traversal algorithms: BFS (Breadth-First Search) and DFS (Depth-First Search).",
          contentAr: "تعلم خوارزميات تجول الرسم البياني: BFS (البحث بالعرض أولاً) و DFS (البحث بالعمق أولاً)."
        },
        {
          type: "code",
          titleEn: "BFS Algorithm",
          titleAr: "خوارزمية BFS",
          code: `void BFS(int start) {
    boolean[] visited = new boolean[V];
    Queue<Integer> queue = new LinkedList<>();
    
    visited[start] = true;
    queue.add(start);
    
    while (!queue.isEmpty()) {
        int v = queue.poll();
        System.out.print(v + " ");
        
        for (int neighbor : adjList.get(v)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.add(neighbor);
            }
        }
    }
}
// Uses Queue - visits level by level`,
          explanation: "BFS uses a queue and explores level by level.",
          explanationAr: "BFS يستخدم طابور ويستكشف مستوى بمستوى."
        },
        {
          type: "code",
          titleEn: "DFS Algorithm",
          titleAr: "خوارزمية DFS",
          code: `void DFS(int v, boolean[] visited) {
    visited[v] = true;
    System.out.print(v + " ");
    
    for (int neighbor : adjList.get(v)) {
        if (!visited[neighbor]) {
            DFS(neighbor, visited);
        }
    }
}
// Uses recursion (Stack) - goes deep first`,
          explanation: "DFS uses recursion/stack and goes deep before backtracking.",
          explanationAr: "DFS يستخدم التكرار/المكدس ويذهب للعمق قبل التراجع."
        },
        {
          type: "concept",
          titleEn: "BFS vs DFS Applications",
          titleAr: "تطبيقات BFS مقابل DFS",
          contentEn: "Each algorithm has different use cases.",
          contentAr: "كل خوارزمية لها حالات استخدام مختلفة.",
          keyPoints: [
            { en: "BFS: Shortest path (unweighted)", ar: "BFS: أقصر مسار (غير موزون)" },
            { en: "BFS: Level order traversal", ar: "BFS: تجول مستوى بمستوى" },
            { en: "DFS: Cycle detection", ar: "DFS: كشف الدورات" },
            { en: "DFS: Topological sorting", ar: "DFS: الترتيب الطوبولوجي" }
          ]
        }
      ],
      exercises: [
        { q: "BFS uses:", qAr: "BFS يستخدم:", options: ["Stack", "Queue", "Tree", "Array"], correct: 1 },
        { q: "DFS uses:", qAr: "DFS يستخدم:", options: ["Queue", "Stack/Recursion", "Hash table", "Heap"], correct: 1 },
        { q: "BFS time complexity:", qAr: "تعقيد وقت BFS:", options: ["O(V)", "O(E)", "O(V+E)", "O(V²)"], correct: 2 },
        { q: "For shortest path use:", qAr: "للمسار الأقصر استخدم:", options: ["DFS", "BFS", "Binary Search", "Sorting"], correct: 1 },
        { q: "DFS explores:", qAr: "DFS يستكشف:", options: ["Level by level", "Deep then backtrack", "Random", "Sorted order"], correct: 1 }
      ]
    }
  };

  const week = weekData[weekNum];
  if (!week) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Week {weekNum} not found</h1>
          <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-emerald-600 text-white rounded-lg">Back to Home</button>
        </div>
      </div>
    );
  }

  const totalSteps = week.content.length + 1;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  const handleAnswer = (qIndex, optIndex) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIndex]: optIndex });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = week.exercises.filter((ex, i) => answers[i] === ex.correct).length;
    const score = Math.round((correct / week.exercises.length) * 100);
    onExerciseComplete(weekNum, score);
  };

  const renderContent = (item, index) => {
    if (item.type === 'intro') {
      return (
        <div key={index} className="bg-gradient-to-r from-emerald-900/50 to-slate-800/50 rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-2">{item.titleEn}</h2>
          <p className="text-emerald-300/70 font-arabic mb-4">{item.titleAr}</p>
          <p className="text-slate-300 mb-2">{item.contentEn}</p>
          <p className="text-emerald-300/70 font-arabic">{item.contentAr}</p>
        </div>
      );
    }
    if (item.type === 'concept') {
      return (
        <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-2">{item.titleEn}</h3>
          <p className="text-emerald-300/70 font-arabic mb-4">{item.titleAr}</p>
          <p className="text-slate-300 mb-2">{item.contentEn}</p>
          <p className="text-emerald-300/70 font-arabic mb-4">{item.contentAr}</p>
          {item.keyPoints && (
            <ul className="space-y-2">
              {item.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <div>
                    <span className="text-white">{point.en}</span>
                    <span className="text-emerald-300/70 font-arabic block text-sm">{point.ar}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    if (item.type === 'code' || item.type === 'sql') {
      return (
        <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-2">{item.titleEn}</h3>
          <p className="text-emerald-300/70 font-arabic mb-4">{item.titleAr}</p>
          <pre className="bg-slate-900 rounded-xl p-4 overflow-x-auto mb-4">
            <code className="text-emerald-400 text-sm">{item.code}</code>
          </pre>
          <p className="text-slate-300 text-sm">{item.explanation}</p>
          <p className="text-emerald-300/70 font-arabic text-sm">{item.explanationAr}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-slate-400 hover:text-white">
              <span>←</span> Back
            </button>
            <div className="text-center">
              <h1 className="text-white font-bold text-sm">Week {weekNum}</h1>
              <p className="text-emerald-300/70 text-xs">{week.titleEn}</p>
            </div>
            <button onClick={onLogout} className="text-red-400 text-sm">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Content */}
        {currentStep === 0 && week.video && (
          <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 mb-8">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${week.video.youtubeId}`}
                title={week.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-1">{week.video.title}</h2>
              <p className="text-emerald-300/70 font-arabic mb-2">{week.video.titleAr}</p>
              <p className="text-slate-400 text-sm">{week.video.description}</p>
            </div>
          </div>
        )}

        {currentStep > 0 && currentStep <= week.content.length && (
          <div className="mb-8">
            {renderContent(week.content[currentStep - 1], currentStep - 1)}
          </div>
        )}

        {showExercise && (
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Exercise | تمرين</h2>
            <div className="space-y-6">
              {week.exercises.map((ex, qIndex) => (
                <div key={qIndex} className="bg-slate-700/30 rounded-xl p-6">
                  <p className="text-white font-medium mb-1">{qIndex + 1}. {ex.q}</p>
                  <p className="text-emerald-300/70 font-arabic text-sm mb-4">{ex.qAr}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ex.options.map((opt, optIndex) => {
                      const isSelected = answers[qIndex] === optIndex;
                      const isCorrect = ex.correct === optIndex;
                      let btnClass = 'p-3 rounded-lg border text-left transition-all ';
                      if (submitted) {
                        if (isCorrect) btnClass += 'bg-emerald-600/30 border-emerald-500 text-emerald-300';
                        else if (isSelected && !isCorrect) btnClass += 'bg-red-600/30 border-red-500 text-red-300';
                        else btnClass += 'bg-slate-700/50 border-slate-600 text-slate-400';
                      } else {
                        btnClass += isSelected ? 'bg-emerald-600/30 border-emerald-500 text-white' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-emerald-500/50';
                      }
                      return (
                        <button key={optIndex} onClick={() => handleAnswer(qIndex, optIndex)} className={btnClass} disabled={submitted}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {!submitted ? (
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < week.exercises.length} className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-lg">
                Submit Answers | إرسال الإجابات
              </button>
            ) : (
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  {Math.round((week.exercises.filter((ex, i) => answers[i] === ex.correct).length / week.exercises.length) * 100)}%
                </div>
                <p className="text-slate-400">
                  {week.exercises.filter((ex, i) => answers[i] === ex.correct).length} / {week.exercises.length} correct
                </p>
                <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg">
                  Back to Course | العودة للدورة
                </button>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        {!showExercise && (
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg"
            >
              ← Previous
            </button>
            {currentStep < week.content.length ? (
              <button onClick={() => setCurrentStep(currentStep + 1)} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg">
                Next →
              </button>
            ) : (
              <button onClick={() => setShowExercise(true)} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg">
                Start Exercise | بدء التمرين
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeekLesson;
