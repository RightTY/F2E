 export interface FirstJob {
        tenure: string;
        leave: string;
        position: string;
        skill: string;
        render: string;
    }

    export interface Works {
        window: string;
        market: string;
    }

    export interface Company {
        industry: string;
        score: string;
        work: string;
        area: string;
        scale: string;
        people: string;
        job_tenure: string;
        salary: string;
        salary_score: string;
        industry_message: string;
    }

    export interface frontendDataModel {
        job: string;
        gender: string;
        age: string;
        education: string;
        major: string;
        first_job: FirstJob;
        works: Works;
        company: Company;
    }

