// ============================================================
// Portfolio Data — Sibichakkaravarthi P
// ============================================================

export const personalInfo = {
  name: 'Sibichakkaravarthi P',
  title: 'Aspiring Data Analyst',
  subtitle: 'SQL | Power BI | Excel | Python',
  email: 'sibichakkaravarthi2004@gmail.com',
  phone: '+91 9345124532',
  location: 'Theni, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/sibichakkaravarthi-p-067047375/',
  github:   'https://github.com/sibichakkaravarthip',
  heroHeadline: 'Turning Data into Meaningful Business Insights',
  heroSubtext:
    "I'm Sibichakkaravarthi P, an aspiring Data Analyst passionate about transforming raw data into actionable insights using SQL, Power BI, Excel, and Python.",
  about: `I am a Computer Science graduate with hands-on project experience in data cleaning, SQL querying, dashboard creation, KPI analysis, and business reporting. 
  
  I enjoy working with complex datasets to uncover patterns, trends, and insights that help organisations make better, data-driven decisions. My analytical approach combines technical skill with business understanding — translating raw numbers into clear, actionable recommendations.
  
  I am actively seeking entry-level Data Analyst opportunities where I can apply my technical knowledge and problem-solving abilities to real business challenges.`,
  interests: [
    'Data Cleaning & Transformation',
    'Exploratory Data Analysis',
    'SQL-Based Business Analysis',
    'Interactive Power BI Dashboards',
    'Data-Driven Decision Making',
  ],
};

export const skills = {
  analytics: {
    label: 'Data Analysis',
    color: 'cyan',
    icon: 'BarChart3',
    items: [
      'Data Cleaning',
      'Exploratory Data Analysis',
      'KPI Reporting',
      'Trend Analysis',
      'Business Reporting',
    ],
    level: 'Working Knowledge',
  },
  sql: {
    label: 'SQL & Databases',
    color: 'blue',
    icon: 'Database',
    items: [
      'MySQL',
      'JOINs',
      'Subqueries',
      'Aggregate Functions',
      'GROUP BY',
      'Data Filtering',
    ],
    level: 'Working Knowledge',
  },
  powerbi: {
    label: 'Power BI',
    color: 'yellow',
    icon: 'PieChart',
    items: [
      'Interactive Dashboards',
      'Data Modeling',
      'DAX Basics',
      'KPI Cards',
      'Report Design',
    ],
    level: 'Working Knowledge',
  },
  excel: {
    label: 'Excel',
    color: 'green',
    icon: 'Table2',
    items: [
      'Pivot Tables',
      'Charts',
      'VLOOKUP',
      'IF / SUMIFS',
      'Data Cleaning',
    ],
    level: 'Working Knowledge',
  },
  python: {
    label: 'Python',
    color: 'purple',
    icon: 'Code2',
    items: ['Pandas', 'NumPy'],
    level: 'Familiar',
  },
};

export const additionalTech = [
  'Java', 'JavaScript', 'HTML', 'CSS', 'React.js',
  'Spring Boot', '.NET', 'Git', 'GitHub', 'Postman',
  'Maven', 'AWS Fundamentals',
];

export const projects = [
  {
    id: 'ecommerce',
    title: 'E-commerce Sales & Business Performance Analysis',
    shortDesc:
      'Analyzed e-commerce sales data to understand revenue trends, product performance, regional sales, and profitability.',
    technologies: ['Excel', 'SQL', 'Power BI'],
    image: '/ecommerce_dashboard.png',
    category: 'Business Analytics',
    highlights: [
      'Revenue trend analysis',
      'Product performance ranking',
      'Regional sales mapping',
      'Profitability reporting',
    ],
    details: {
      problem:
        'An e-commerce business needed better visibility into sales performance, product profitability, and regional revenue distribution to make data-driven decisions.',
      objectives: [
        'Identify top-performing products and underperforming categories.',
        'Understand monthly and quarterly revenue trends.',
        'Map regional sales distribution and growth patterns.',
        'Build executive-ready dashboards for ongoing monitoring.',
      ],
      dataset:
        'E-commerce transactional dataset containing order details, product categories, customer regions, pricing, and profitability data. (Illustrative dataset used for project practice.)',
      tools: ['Excel (Data Cleaning & EDA)', 'MySQL (Business Queries)', 'Power BI (Dashboard & Reporting)'],
      workflow: [
        'Imported raw CSV sales data into Excel.',
        'Cleaned data: removed duplicates, handled nulls, standardised date formats.',
        'Performed initial EDA using Pivot Tables and charts.',
        'Imported cleaned data into MySQL for structured querying.',
        'Wrote SQL queries using JOINs, GROUP BY, and aggregate functions.',
        'Developed Power BI data model linking sales, product, and region tables.',
        'Created DAX measures for KPIs: Revenue, Profit Margin, AOV.',
        'Designed interactive dashboards with slicers and drill-down capability.',
      ],
      sqlExample: `-- Monthly Revenue & Profit Analysis
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    SUM(sales_amount)               AS total_revenue,
    SUM(profit)                     AS total_profit,
    ROUND(SUM(profit)/SUM(sales_amount)*100, 2) AS profit_margin_pct,
    COUNT(DISTINCT order_id)        AS total_orders
FROM sales
GROUP BY month
ORDER BY month;`,
      daxExample: `// Total Revenue KPI
Total Revenue = SUM(Sales[Sales_Amount])

// Profit Margin %
Profit Margin % = 
    DIVIDE(SUM(Sales[Profit]), SUM(Sales[Sales_Amount])) * 100

// MoM Revenue Growth
Revenue MoM Growth = 
    VAR currentMonth = [Total Revenue]
    VAR prevMonth = CALCULATE([Total Revenue], DATEADD(Dates[Date], -1, MONTH))
    RETURN DIVIDE(currentMonth - prevMonth, prevMonth) * 100`,
      findings: [
        'Technology products contributed the highest revenue but lower profit margins than Office Supplies.',
        'Q4 consistently showed peak sales performance, indicating seasonal demand.',
        'The West region generated 34% of total revenue, followed by the East at 28%.',
        'Products in the Furniture category had the lowest profit margins at around 2.5%.',
        'Monthly revenue trended upward year-over-year, indicating healthy business growth.',
      ],
      githubLink: 'https://github.com/your-github-username/ecommerce-analysis', // Replace with actual link
    },
  },
  {
    id: 'bankloan',
    title: 'Bank Loan Risk & Performance Analysis',
    shortDesc:
      'Analyzed loan application and repayment data to understand approval patterns, default rates, and borrower risk segments.',
    technologies: ['Excel', 'SQL', 'Power BI'],
    image: '/bank_loan_dashboard.png',
    category: 'Financial Analytics',
    highlights: [
      'Default rate analysis',
      'Borrower risk segmentation',
      'Loan status monitoring',
      'Repayment trend analysis',
    ],
    details: {
      problem:
        'A financial institution needed to analyse its loan portfolio to identify default risks, monitor repayment performance, and improve lending decision-making.',
      objectives: [
        'Calculate good loan vs bad loan ratios and default rates.',
        'Identify high-risk borrower segments by grade, purpose, and employment length.',
        'Monitor monthly loan application volumes and funding trends.',
        'Build dashboards to support lending strategy and risk management.',
      ],
      dataset:
        'Bank loan dataset containing loan applications, funded amounts, interest rates, loan grades, employment details, and repayment status. (Illustrative dataset used for project practice.)',
      tools: ['Excel (Data Cleaning & Organisation)', 'MySQL (Loan Analysis Queries)', 'Power BI (Risk Dashboard)'],
      workflow: [
        'Loaded raw loan application CSV data into Excel.',
        'Cleaned data: standardised loan status categories, handled missing values.',
        'Classified loans into "Good Loans" (Fully Paid/Current) and "Bad Loans" (Charged Off).',
        'Imported clean data into MySQL for structured analysis.',
        'Wrote SQL queries to calculate default rates, approval trends, and risk segments.',
        'Built Power BI data model with loan, borrower, and payment tables.',
        'Created DAX measures for KPIs: Default Rate, Funded Amount, Avg Interest Rate.',
        'Designed summary, overview, and details dashboards.',
      ],
      sqlExample: `-- Good Loan vs Bad Loan Analysis
SELECT 
    loan_status,
    COUNT(id)                              AS loan_count,
    ROUND(COUNT(id) * 100.0 / 
        (SELECT COUNT(*) FROM bank_loan_data), 2) AS percentage,
    SUM(loan_amount)                       AS total_funded,
    SUM(total_payment)                     AS total_received
FROM bank_loan_data
GROUP BY loan_status;

-- Default Rate by Loan Grade
SELECT 
    grade,
    COUNT(*) AS total_loans,
    SUM(CASE WHEN loan_status = 'Charged Off' THEN 1 ELSE 0 END) AS defaults,
    ROUND(SUM(CASE WHEN loan_status = 'Charged Off' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS default_rate
FROM bank_loan_data
GROUP BY grade
ORDER BY grade;`,
      daxExample: `// Default Rate KPI
Default Rate % = 
    DIVIDE(
        CALCULATE(COUNTROWS(Loans), Loans[Loan_Status] = "Charged Off"),
        COUNTROWS(Loans)
    ) * 100

// Good Loan % 
Good Loan % = 
    DIVIDE(
        CALCULATE(COUNTROWS(Loans), Loans[Category] = "Good Loan"),
        COUNTROWS(Loans)
    ) * 100`,
      findings: [
        'Good loans (Fully Paid + Current) represent approximately 86.2% of the total portfolio.',
        'Bad loans (Charged Off) account for 13.8%, representing significant financial exposure.',
        'Grade G borrowers had the highest default rate at over 31%.',
        'Debt consolidation is the most common loan purpose, comprising ~47% of all applications.',
        'Borrowers with less than 1 year of employment showed higher default rates than experienced borrowers.',
        'Monthly loan application volume peaked in Q4, reflecting year-end borrowing behaviour.',
      ],
      githubLink: 'https://github.com/your-github-username/bank-loan-analysis', // Replace with actual link
    },
  },
  {
    id: 'sakila',
    title: 'Film Rental Data Analytics Using SQL',
    shortDesc:
      'Analyzed the Sakila film rental database to discover customer behaviour, film rental trends, and revenue patterns using advanced SQL.',
    technologies: ['SQL', 'MySQL', 'Sakila DB'],
    image: '/sql_analytics_visual.png',
    category: 'SQL Analytics',
    highlights: [
      'Customer behaviour analysis',
      'Film rental trend discovery',
      'Revenue pattern analysis',
      'Relational schema exploration',
    ],
    details: {
      problem:
        'A film rental business needed to understand which films generate the most revenue, who their best customers are, and how rental patterns vary across categories and regions.',
      objectives: [
        'Identify the most rented films and top-revenue-generating categories.',
        'Analyse customer activity and identify high-value customers.',
        'Explore rental patterns across stores and time periods.',
        'Practice complex SQL joins, subqueries, and aggregation on a real relational schema.',
      ],
      dataset:
        'Sakila is a sample database provided by MySQL. It models a DVD rental store with 16 relational tables covering films, actors, customers, rentals, payments, stores, and staff.',
      tools: ['MySQL (All Analysis)', 'Sakila Sample Database'],
      workflow: [
        'Installed and explored the Sakila database schema in MySQL Workbench.',
        'Mapped table relationships: film → inventory → rental → payment chain.',
        'Wrote exploratory queries to understand data distributions and nulls.',
        'Built progressively complex queries using multi-table JOINs.',
        'Used aggregate functions to calculate revenue, rental counts, and averages.',
        'Applied subqueries and CTEs for customer ranking and film performance.',
        'Summarised findings into business-readable result tables.',
      ],
      sqlExample: `-- Top 10 Most Rented Films
SELECT 
    f.title,
    c.name       AS category,
    COUNT(r.rental_id) AS rental_count,
    SUM(p.amount)      AS total_revenue
FROM film f
JOIN inventory   i ON f.film_id    = i.film_id
JOIN rental      r ON i.inventory_id = r.inventory_id
JOIN payment     p ON r.rental_id  = p.rental_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category    c ON fc.category_id = c.category_id
GROUP BY f.film_id, f.title, c.name
ORDER BY rental_count DESC
LIMIT 10;

-- Top Customers by Revenue
SELECT 
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.email,
    COUNT(r.rental_id)  AS total_rentals,
    SUM(p.amount)       AS total_spent
FROM customer c
JOIN rental  r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id  = p.rental_id
GROUP BY c.customer_id
ORDER BY total_spent DESC
LIMIT 10;`,
      findings: [
        'Sports, Animation, and Action categories consistently recorded the highest rental counts.',
        'The top 10 customers collectively accounted for over 8% of total rental revenue.',
        'Summer months (June–August) showed peak rental activity across both stores.',
        'Films with PG-13 rating had the highest average rental frequency.',
        'Store 2 outperformed Store 1 in total revenue by approximately 11%.',
        'Films rented for longer durations (rental_duration > 5) generated higher total revenue.',
      ],
      githubLink: 'https://github.com/your-github-username/sakila-sql-analysis', // Replace with actual link
    },
  },
];

export const education = [
  {
    institution: 'Mary Matha College of Arts and Science',
    degree: 'B.Sc. Computer Science',
    gpa: '7.0 / 10',
    location: 'Theni, Tamil Nadu, India',
    period: '2021 – 2024',
    highlights: [
      'Core modules: Data Structures, DBMS, Programming (Java, Python)',
      'Final year project in software development',
      'Developed interest in data analytics and business intelligence',
    ],
  },
];

export const certifications = [
  {
    title: 'Java Full Stack Developer',
    issuer: 'IIT / NASSCOM',
    year: '2026',
    color: 'blue',
    icon: 'Award',
    description: 'Comprehensive training covering Java backend development, Spring Boot, REST APIs, and full stack web technologies.',
  },
  {
    title: 'AWS Cloud Computing Training',
    issuer: 'Besant Technologies, Chennai',
    year: '2026',
    color: 'orange',
    icon: 'Cloud',
    description: 'Hands-on training in core AWS services including EC2, S3, RDS, IAM, and cloud architecture fundamentals.',
  },
  {
    title: 'Data Analyst',
    issuer: 'Besant Technologies, Chennai',
    year: '2026',
    color: 'cyan',
    icon: 'BarChart2',
    description: 'Practical data analytics training covering SQL, Power BI dashboard design, Excel analytics, and Python basics for data analysis.',
  },
];

export const heroStats = [
  { label: 'Projects Completed', value: '3+' },
  { label: 'Tools Mastered', value: '5+' },
  { label: 'SQL Queries Written', value: '50+' },
  { label: 'Dashboards Built', value: '3+' },
];
