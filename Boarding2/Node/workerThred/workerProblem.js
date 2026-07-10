const { Worker } = require("worker_threads");

const company = {
    companyName: "TechNova Solutions",
    location: "Bangalore",
    departments: [
        {
            id: 1,
            name: "Engineering",
            manager: "Rahul",
            employees: [
                {
                    id: 101,
                    name: "Alice",
                    age: 28,
                    salary: 85000,
                    skills: ["JavaScript", "React", "Node.js"],
                    address: {
                        city: "Bangalore",
                        state: "Karnataka",
                    },
                    projects: [
                        { name: "CRM", status: "Completed" },
                        { name: "Analytics", status: "Ongoing" },
                    ],
                },
                {
                    id: 102,
                    name: "Bob",
                    age: 32,
                    salary: 92000,
                    skills: ["Java", "Spring Boot"],
                    address: {
                        city: "Hyderabad",
                        state: "Telangana",
                    },
                    projects: [{ name: "Payments", status: "Completed" }],
                },
                {
                    id: 103,
                    name: "Charlie",
                    age: 26,
                    salary: 78000,
                    skills: ["React", "TypeScript"],
                    address: {
                        city: "Chennai",
                        state: "Tamil Nadu",
                    },
                    projects: [{ name: "CRM", status: "Ongoing" }],
                },
            ],
        },
        {
            id: 2,
            name: "HR",
            manager: "Sneha",
            employees: [
                {
                    id: 201,
                    name: "David",
                    age: 35,
                    salary: 60000,
                    skills: ["Recruitment", "Communication"],
                    address: {
                        city: "Pune",
                        state: "Maharashtra",
                    },
                    projects: [{ name: "Hiring Drive", status: "Ongoing" }],
                },
                {
                    id: 202,
                    name: "Emma",
                    age: 30,
                    salary: 65000,
                    skills: ["Payroll", "Excel"],
                    address: {
                        city: "Mumbai",
                        state: "Maharashtra",
                    },
                    projects: [
                        { name: "Employee Benefits", status: "Completed" },
                    ],
                },
            ],
        },

        {
            id: 3,
            name: "Finance",
            manager: "Joseph",
            employees: [
                {
                    id: 301,
                    name: "Frank",
                    age: 38,
                    salary: 90000,
                    skills: ["Accounting", "SAP"],
                    address: {
                        city: "Delhi",
                        state: "Delhi",
                    },
                    projects: [{ name: "Annual Audit", status: "Completed" }],
                },
                {
                    id: 302,
                    name: "Grace",
                    age: 29,
                    salary: 75000,
                    skills: ["Taxation", "Excel"],
                    address: {
                        city: "Kochi",
                        state: "Kerala",
                    },
                    projects: [{ name: "GST Filing", status: "Ongoing" }],
                },
            ],
        },
        {
            id: 4,
            name: "Marketing",
            manager: "Priya",
            employees: [
                {
                    id: 401,
                    name: "Henry",
                    age: 31,
                    salary: 70000,
                    skills: ["SEO", "Content"],
                    address: {
                        city: "Bangalore",
                        state: "Karnataka",
                    },
                    projects: [{ name: "Brand Campaign", status: "Completed" }],
                },
                {
                    id: 402,
                    name: "Isabella",
                    age: 27,
                    salary: 72000,
                    skills: ["Social Media", "Design"],
                    address: {
                        city: "Goa",
                        state: "Goa",
                    },
                    projects: [{ name: "Instagram Growth", status: "Ongoing" }],
                },
            ],
        },
    ],
};
let res = [];
let complete = 0;

for (let item in company) {
    if (item === "departments") {
        for (let dept of company[item]) {
            const worker = new Worker("./avgWorker.js", { workerData: dept });

            worker.on("message", (data) => {
                complete++;
                res.push(data);
                if (complete === company.departments.length) {
                    console.log(res);
                }
            });

            worker.on("error", (error) => {
                console.log("error ", error);
            });

            worker.on("exit", (code) => {
                console.log("worker executed and finished with code ", code);
            });
        }
    }
}
