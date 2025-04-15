function courseInfo(obj) {
  defaultObject = {
    courseName: "deafult",
    courseDuration: "deafult",
    courseOwner: "deafult",
  };
  return Object.assign(defaultObject, obj);
}
console.log(courseInfo({ courseName: "4 Months", courseOwner: "Dr. Omnia" }));
console.log(courseInfo());
