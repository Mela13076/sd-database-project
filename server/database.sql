CREATE DATABASE pressure;



/*need on databse: id, pressure value, date, pass/ fail option */
CREATE TABLE pressure_data(
    pressure_id SERIAL PRIMARY KEY,
    pressure_value decimal,
    data_collected DATE NOT NULL DEFAULT CURRENT_DATE,
    pass_fail boolean
);
