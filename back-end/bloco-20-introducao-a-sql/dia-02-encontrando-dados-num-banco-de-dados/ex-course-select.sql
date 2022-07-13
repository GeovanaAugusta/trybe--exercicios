-- Monte uma query que exiba seu nome na tela;
SELECT 'Geovana';

-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Geovana', 'Augusta', 27, 'Belo Horizonte';

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'Geovana' AS nome, 'Augusta' AS sobrenome, 27 AS idade, 'Desenvolvedor Web' AS 'area_de_atuacao', 'Belo Horizonte' AS 'cidade natal';

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "data_atual".
SELECT CURDATE() AS Today;  
SELECT DATE_FORMAT(NOW(), "Date : %Y-%m-%d Hour : %H") AS 'data_atual';