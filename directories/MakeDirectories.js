const fs = require("fs");

const folderNames = [
  "1. Introduction",
  "2. Different Tiers in Software Architecture",
  "3. Web Architecture",
  "4. Scalability",
  "5. High Availability",
  "6. Load Balancing",
  "7. Monolith and Microservices",
  "8. Micro Frontends",
  "9. Database",
  "10. Caching",
  "11. Message Queue",
  "12. Stream Processing",
  "13. More on Architecture",
  "14. Picking the Right Technology",
  "15. Case Studies",
  "16. Mobile Apps",
];

try {
  folderNames.forEach(
    (name) => fs.mkdir(name, () => console.log(name)) //`${path}/${name}`
  );
} catch (error) {
  console.log(error);
}
