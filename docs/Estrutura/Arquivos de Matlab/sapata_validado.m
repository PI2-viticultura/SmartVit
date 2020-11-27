clear all;
clc;

%%%%%%%%%%%%%%%%% Projeto da sapata pelo Pimenta (https://www.abcem.org.br/construmetal/2010/downloads/contribuicoes-tecnicas/15-ligacoes-de-apoio-de-pilares-em-perfil-tubular.pdf)

%Chumbador de 3/4'' - a�o SAE 1020

%%% Vari�veis de entrada:

% c�lculo de e:
Msd = 26300; % momento (figura 2) [N*cm]
Nsd = 450; % normal (figura 2) [N] ~ considerei a estrutura inteira pesando 45kg

% c�lculo de lx:
h = 150; % comprimento do pilar (figura 1) [mm]
a1 = 40; % dist centro chumb ao pilar, deve ser igual � dist do centro do chumb ao fim da placa (tabela 1) [mm]

% c�lculo de ly:
nb = 4; % n�mero de chumbadores (4=<nb=<8) []
a2 = 80; % dist�ncia entre os centros dos chumbadores no lado menor (tabela 1) [mm]

% c�lculo de n:
b = 50; % largura do pilar (figura 1) [mm]

% c�lculo do ly_eq:
db = 19; % di�metro do chumbador (tabela 1) [mm]

% c�lculo da tens�o resistente de c�lculo:
fck = 10; % resist�ncia caracter�stica do concreto � compress�o [MPa]

% c�lculo do lc:
a = 150; % dist�ncia do centro do parafuso ao centro do pilar

% c�lculo do tp_min1:
gama_a1 = 1.1; % coeficiente de pondera��o da resist�ncia ou das a��es, sai da NBR
fy = 272; % resist�ncia ao escoamento do a�o da chapa [MPa]

%%% C�lculo efetivo:

lx = h+4*a1; % vari�vel auxiliar [mm]

ly = (((0.5*nb)-1)*a2)+(2*a1); % vari�vel auxiliar [mm]

m = (lx-(0.95*h))/2; % vari�vel auxiliar [mm]

n = (ly-(0.95*b))/2; % vari�vel auxiliar [mm]

ly_eq = nb*(db+m-a1); % vari�vel auxiliar [mm]

if ly_eq > ly
    ly_eq = ly;
end

m_eq = m; % vari�vel auxiliar

nb_eq = nb; % vari�vel auxiliar

sigma_rd = (fck/(1.4*1.4))*sqrt(1); %  tens�o resistente de c�lculo
    % considera q a chapa e o concreto tem a mesma dimens�o, por isso fica ra�z de 1
    % o primeiro 1,4 � um fator de seguran�a
    % o outro � fator de pondera��o das resist�ncias, tabela 3 da NBR 8800/2008

e = (Msd/Nsd)*10; % excentricidade [mm]
aux = (lx-(Nsd/(sigma_rd*ly)))/2;

% Como e>aux, trata-se de um Caso C3

lc = ((lx/2)+a) - sqrt((((lx/2)+a)^2)-(((2*Nsd)*(e+a))/(sigma_rd*ly)));

p = sqrt(lc*((2*m)-lc));

l_max = p;

tp_min1 = l_max*sqrt((2*sigma_rd)/(fy*gama_a1)); % [mm]

Ft_sd = (2*((sigma_rd*lc*ly)-Nsd))/nb_eq; % [N]

tp_min2 = sqrt(((2*nb_eq*Ft_sd)*(m_eq-a1))/(ly_eq*(fy/gama_a1))); %[mm]

if tp_min1 >= tp_min2
    tp_min = tp_min1;
else
    tp_min = tp_min2;
end


fprintf('Comprimento da chapa = %.0f mm\n', lx)
fprintf('Largura da chapa = %.0f mm\n', ly)
fprintf('Espessura m�nima da placa = %.3f mm\n', tp_min)

















