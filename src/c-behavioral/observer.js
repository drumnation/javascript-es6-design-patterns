const JobPost = title => ({
  title: title
});

class JobSeeker {
  constructor(name) {
    this._name = name;
  }

  notify(jobPost) {
    console.log(
      this._name,
      "has been notified of a new posting :",
      jobPost.title
    );
  }
}

// Then we have our job postings to which the job seekers will subscribe

class JobBoard {
  constructor() {
    this._subscribers = [];
  }

  subscribe(jobSeeker) {
    this._subscribers.push(jobSeeker);
  }

  addJob(jobPosting) {
    this._subscribers.forEach(subscriber => {
      subscriber.notify(jobPosting);
    });
  }
}

// Then it can be used as

console.log("\n*** Observer Pattern ***");

// Create subscribers
const jonDoe = new JobSeeker("John Doe");
const janeDoe = new JobSeeker("Jane Doe");
const kaneDoe = new JobSeeker("Kane Doe");

// Create publisher and attach subscribers
const jobBoard = new JobBoard();
jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);
jobBoard.subscribe(kaneDoe);

// Add a new job and see if subscribers get notified
jobBoard.addJob(JobPost("Software Engineer"));

// Output
// John Doe has been notified of a new posting : Software Engineer
// Jane Doe has been notified of a new posting : Software Engineer
