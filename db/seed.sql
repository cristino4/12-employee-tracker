INSERT INTO department (id,department_name)
VALUES (1,"sales"),
       (2,"engineering"),
       (3,"marketing");

INSERT INTO role (id,title,salary,department_id)
VALUES (1, "Sales", 444, 1),
       (2,"Engineer",90000,2),
       (3,"Marketing Manager",100000,3);

INSERT INTO employee (id,first_name, last_name,role_id,manager_id)
VALUES (1,"michael", "bolton",1,null),
       (2,"cristino","castro",2,1),
       (3,"John", "Spock",3,1),
       (4,"blutengel", "eisbrecher",1,1),
       (5,"oomph!","BirthdayMassacre",2,1),
       (6,"Alisson", "Timber",3,1);