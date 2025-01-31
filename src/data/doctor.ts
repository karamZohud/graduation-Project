export const doctors = [
    {
      id: 1,
      name: "Karam Zuhdeh",
      isVerified: false,
      description: "Oral and Maxillofacial Surgeon",
      specialty: "Cardiologist",
      rating: 4,
      location: "Tulkarm",
      gender: "Male",
      images: [
        "https://d1k13df5m14swc.cloudfront.net/images/doctor/Dr-Karam-Zuhdeh.jpg",
        "https://d1k13df5m14swc.cloudfront.net/images/doctor/Dr-Karam-Zuhdeh.jpg",
      ],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      isVerified: true,
      description: "Pediatrician",
      specialty: "Pediatrician",
      rating: 5,
      location: "Nablus",
      gender: "Female",
      images: [
        "https://example.com/images/doctor/Dr-Sarah-Johnson.jpg",
        "https://example.com/images/doctor/Dr-Sarah-Johnson.jpg",
      ],
    },
    {
      id: 3,
      name: "Ahmed Ali",
      isVerified: false,
      description: "Cardiologist",
      specialty: "Cardiologist",
      rating: 4.5,
      location: "Jenin",
      gender: "Male",
      images: [
        "https://example.com/images/doctor/Dr-Ahmed-Ali.jpg",
        "https://example.com/images/doctor/Dr-Ahmed-Ali.jpg",
      ],
    },
    {
      id: 4,
      name: "Emily Brown",
      isVerified: true,
      description: "Dermatologist",
      specialty: "Dermatologist",
      rating: 4,
      location: "Jerusalem",
      gender: "Female",
      images: [
        "https://example.com/images/doctor/Dr-Emily-Brown.jpg",
        "https://example.com/images/doctor/Dr-Emily-Brown.jpg",
      ],
    },
    {
      id: 5,
      name: "John Smith",
      isVerified: false,
      description: "Neurologist",
      specialty: "Neurologist",
      rating: 4.8,
      location: "Ramallah",
      gender: "Male",
      images: [
        "https://example.com/images/doctor/Dr-John-Smith.jpg",
        "https://example.com/images/doctor/Dr-John-Smith.jpg",
      ],
    },
    {
      id: 6,
      name: "Maria Garcia",
      isVerified: true,
      description: "Gynecologist",
      specialty: "Gynecologist",
      rating: 4.7,
      location: "Bethlehem",
      gender: "Female",
      images: [
        "https://example.com/images/doctor/Dr-Maria-Garcia.jpg",
        "https://example.com/images/doctor/Dr-Maria-Garcia.jpg",
      ],
    },
    {
      id: 7,
      name: "David Lee",
      isVerified: true,
      description: "Orthopedic Surgeon",
      specialty: "Orthopedist",
      rating: 4.6,
      location: "Hebron",
      gender: "Male",
      images: [
        "https://example.com/images/doctor/Dr-David-Lee.jpg",
        "https://example.com/images/doctor/Dr-David-Lee.jpg",
      ],
    },
    {
      id: 8,
      name: "Anna Kim",
      isVerified: true,
      description: "Ophthalmologist",
      specialty: "Ophthalmologist",
      rating: 4.9,
      location: "Qalqilya",
      gender: "Female",
      images: [
        "https://example.com/images/doctor/Dr-Anna-Kim.jpg",
        "https://example.com/images/doctor/Dr-Anna-Kim.jpg",
      ],
    },
    {
      id: 9,
      name: "Michael Chen",
      isVerified: true,
      description: "Psychiatrist",
      specialty: "Psychiatrist",
      rating: 4.3,
      location: "Jericho",
      gender: "Male",
      images: [
        "https://example.com/images/doctor/Dr-Michael-Chen.jpg",
        "https://example.com/images/doctor/Dr-Michael-Chen.jpg",
      ],
    },
    {
      id: 10,
      name: "Laura Wilson",
      isVerified: true,
      description: "Endocrinologist",
      specialty: "Endocrinologist",
      rating: 4.4,
      location: "Tubas",
      gender: "Female",
      images: [
        "https://example.com/images/doctor/Dr-Laura-Wilson.jpg",
        "https://example.com/images/doctor/Dr-Laura-Wilson.jpg",
      ],
    },
    {
      id: 11,
      name: "Robert Martinez",
      isVerified: true,
      description: "Gastroenterologist",
      specialty: "Gastroenterologist",
      rating: 4.2,
      location: "Salfit",
      gender: "Male",
      images: [
        "https://example.com/images/doctor/Dr-Robert-Martinez.jpg",
        "https://example.com/images/doctor/Dr-Robert-Martinez.jpg",
      ],
    },
  ];
  
  export const specialists = [
    { id: 1, name: "Cardiologist" },
    { id: 2, name: "Dermatologist" },
    { id: 3, name: "Neurologist" },
    { id: 4, name: "Oncologist" },
    { id: 5, name: "Pediatrician" },
    { id: 6, name: "Psychiatrist" },
    { id: 7, name: "Radiologist" },
    { id: 8, name: "Surgeon" },
    { id: 9, name: "Urologist" },
    { id: 10, name: "Orthopedist" },
  ];
  
  export const locations = [
    {
      id: 1,
      name: "Tulkarm",
    },
    {
      id: 2,
      name: "Nablus",
    },
    {
      id: 3,
      name: "Jenin",
    },
    {
      id: 4,
      name: "Jerusalem",
    },
    {
      id: 5,
      name: "Ramallah",
    },
    {
      id: 6,
      name: "Bethlehem",
    },
    {
      id: 7,
      name: "Hebron",
    },
    {
      id: 8,
      name: "Qalqilya",
    },
    {
      id: 9,
      name: "Jericho",
    },
    {
      id: 10,
      name: "Tubas",
    },
    {
      id: 11,
      name: "Salfit",
    },
  ];
  
  export const top100Doctors = [
    { title: "Karam Zuhdeh", location: "Tulkarm" },
    { title: "Sarah Johnson", location: "Nablus" },
    { title: "Ahmed Ali", location: "Jenin" },
    { title: "Emily Brown", location: "Jerusalem" },
    { title: "John Smith", location: "Ramallah" },
    { title: "Maria Garcia", location: "Bethlehem" },
    { title: "David Lee", location: "Hebron" },
    { title: "Anna Kim", location: "Qalqilya" },
    { title: "Michael Chen", location: "Jericho" },
    { title: "Laura Wilson", location: "Tubas" },
    { title: "Robert Martinez", location: "Salfit" },
    { title: "Karam Zuhdeh", location: "Tulkarm" },
    { title: "Sarah Johnson", location: "Nablus" },
    { title: "Ahmed Ali", location: "Jenin" },
    { title: "Emily Brown", location: "Jerusalem" },
    { title: "John Smith", location: "Ramallah" },
    { title: "Maria Garcia", location: "Bethlehem" },
    { title: "David Lee", location: "Hebron" },
    { title: "Anna Kim", location: "Qalqilya" },
    { title: "Michael Chen", location: "Jericho" },
    { title: "Laura Wilson", location: "Tubas" },
    { title: "Robert Martinez", location: "Salfit" },
    { title: "Karam Zuhdeh", location: "Tulkarm" },
    { title: "Sarah Johnson", location: "Nablus" },
    { title: "Ahmed Ali", location: "Jenin" },
    { title: "Emily Brown", location: "Jerusalem" },
    { title: "John Smith", location: "Ramallah" },
    { title: "Maria Garcia", location: "Bethlehem" },
  ];
  