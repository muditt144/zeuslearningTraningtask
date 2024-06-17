document.addEventListener('DOMContentLoaded', () => {
  let unit = 4
    const courses = [
      {
        title: "Acceleration",
        subject: "Physics",
        grade: "Grade 7",
        units: unit,
        lessons: 18,
        topics: 24,
        className: "Mr. Frank's Class B",
        students: 50,
        startDate: "21-Jan-2020",
        endDate: "21-Aug-2020",
        image: "./assets/images/imageMask-1.svg",
        newClasses: 2,
      },
      {
        title: "Displacement, Velocity and Speed",
        subject: "Physics",
        grade: "Grade 6",
        units: 2,
        lessons: 15,
        topics: 20,
        className: "No Classes",
        students: 0,
        startDate: "",
        endDate: "",
        image: "./assets/images/imageMask-1.png",
        newClasses: 3,
      },
      {
        title: "Introduction to Biology: Micro organisms and how they affect us",
        subject: "Biology",
        grade: "Grade 4",
        units: 5,
        lessons: 16,
        topics: 22,
        className: "All Classes",
        students: 300,
        startDate: "",
        endDate: "",
        image: "./assets/images/imageMask-1.png",
        newClasses: 1,
      },
      {
        title: "Introduction to High School Mathematics",
        subject: "Mathematics",
        grade: "Grade 8",
        units: 4,
        lessons: 18,
        topics: 24,
        className: "Mr. Frank's Class A",
        students: 44,
        startDate: "14-Oct-2019",
        endDate: "20-Oct-2020",
        image: "./assets/images/imageMask-1.png",
        newClasses: 3,
      },
    ];
  
    const courseCardsContainer = document.getElementById('course-cards');
  
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.className = 'card';
  
      courseCard.innerHTML = `
        <div class="card-main">
          <div class="card-main-left">
            <img src="${course.image}" alt="Course Image" />
          </div>
          <div class="card-main-right">
            <p>${course.title}</p>
            <p>${course.subject} | ${course.grade} <span style="color: #1F7A54;">+${course.newClasses}</span></p>
            <p style="word-spacing: 8px;"><b>${course.units}</b> Units  <b>${course.lessons}</b> Lessons  <b>${course.topics}</b> Topics</p>
            <select name="class">
              <option value="${course.className}" selected>${course.className}</option>
            </select>
            <p>${course.students ? `${course.students} students` : ''} ${course.startDate ? `<span style="margin: 0 4px; color: #666666;">|</span> ${course.startDate} - ${course.endDate}` : ''}</p>
          </div>
        </div>
        <hr style="margin: 10px 0;">
        <div class="logo">
          <img src="./assets/icons/preview.svg" alt="Preview" />
          <img src="./assets/icons/manage course.svg" alt="Manage Course" ${course.className === 'No Classes' ? 'style="opacity: 0.4;"' : ''} />
          <img src="./assets/icons/grade submissions.svg" alt="Grade Submissions" ${course.className === 'No Classes' ? 'style="opacity: 0.4;"' : ''} />
          <img src="./assets/icons/reports.svg" alt="Reports" />
        </div>
        <img src="./assets/icons/favourite.svg" alt="Favourite" class="wishlist">
      `;
  
      courseCardsContainer.appendChild(courseCard);
    });
  });
  