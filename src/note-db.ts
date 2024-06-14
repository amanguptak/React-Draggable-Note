export const notesData = [
    {
        "id": "1",
        "title": "Logo Design Principles",
        "content": "A good logo must be simple, memorable, and versatile. It should be effective at various sizes and in different contexts."
    },
    {
        "id": "2",
        "title": "Golden Ratio in Design",
        "content": "The Golden Ratio is a mathematical proportion often found in nature and art. In design, it helps create visually pleasing and harmonious compositions."
    },
    {
        "id": "3",
        "title": "Cultural Aesthetics",
        "content": "Different cultures have unique interpretations of colors, shapes, and symbols. Understanding these can help in creating logos that resonate globally."
    },
    {
        "id": "4",
        "title": "Minimalist Design",
        "content": "Minimalist design focuses on simplicity and functionality. It removes unnecessary elements, allowing the core message to shine through."
    },
    {
        "id": "5",
        "title": "Detailed Design Guide",
        "content": "Refer to the detailed design guide for specific color codes, font choices, and layout guidelines to ensure brand consistency."
    }
]


export  interface SingleNote {
    id: string;
    title: string;
    content: string;
    position?: { x: number; y: number };
  }