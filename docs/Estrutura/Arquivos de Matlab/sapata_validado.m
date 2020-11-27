clear all;
clc;

%%%%%%%%%%%%%%%%% Projeto da sapata pelo Pimenta (https://www.abcem.org.br/construmetal/2010/downloads/contribuicoes-tecnicas/15-ligacoes-de-apoio-de-pilares-em-perfil-tubular.pdf)

%Chumbador de 3/4'' - aço SAE 1020

%%% Variáveis de entrada:

% cálculo de e:
Msd = 26300; % momento (figura 2) [N*cm]
Nsd = 450; % normal (figura 2) [N] ~ considerei a estrutura inteira pesando 45kg

% cálculo de lx:
h = 150; % comprimento do pilar (figura 1) [mm]
a1 = 40; % dist centro chumb ao pilar, deve ser igual à dist do centro do chumb ao fim da placa (tabela 1) [mm]

% cálculo de ly:
nb = 4; % número de chumbadores (4=<nb=<8) []
a2 = 80; % distância entre os centros dos chumbadores no lado menor (tabela 1) [mm]

% cálculo de n:
b = 50; % largura do pilar (figura 1) [mm]

% cálculo do ly_eq:
db = 19; % diâmetro do chumbador (tabela 1) [mm]

% cálculo da tensão resistente de cálculo:
fck = 10; % resistência característica do concreto à compressão [MPa]

% cálculo do lc:
a = 150; % distância do centro do parafuso ao centro do pilar

% cálculo do tp_min1:
gama_a1 = 1.1; % coeficiente de ponderação da resistência ou das ações, sai da NBR
fy = 272; % resistência ao escoamento do aço da chapa [MPa]

%%% Cálculo efetivo:

lx = h+4*a1; % variável auxiliar [mm]

ly = (((0.5*nb)-1)*a2)+(2*a1); % variável auxiliar [mm]

m = (lx-(0.95*h))/2; % variável auxiliar [mm]

n = (ly-(0.95*b))/2; % variável auxiliar [mm]

ly_eq = nb*(db+m-a1); % variável auxiliar [mm]

if ly_eq > ly
    ly_eq = ly;
end

m_eq = m; % variável auxiliar

nb_eq = nb; % variável auxiliar

sigma_rd = (fck/(1.4*1.4))*sqrt(1); %  tensão resistente de cálculo
    % considera q a chapa e o concreto tem a mesma dimensão, por isso fica raíz de 1
    % o primeiro 1,4 é um fator de segurança
    % o outro é fator de ponderação das resistências, tabela 3 da NBR 8800/2008

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
fprintf('Espessura mínima da placa = %.3f mm\n', tp_min)

















