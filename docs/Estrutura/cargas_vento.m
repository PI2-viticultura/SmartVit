clear all;
clc;

%%%%%%%%%%%%%%%%%%%% Cálculo da força do vento no poste


%1°) Cálculo de Vk:
V0 = 35; %[m/s] gráfico de isoplatas, página 6 NBR 6123
S1 = 1; % fator topográfico, página 5 da NBR 6123

    b = 0.94; % página 9 da NBR 6123 - tabela 1
    Fr = 1; % página 9 da NBR 6123 - tabela 1 - usa o da categoria 2, a norma fala isso
    p = 0.1; % página 9 da NBR 6123 - tabela 1
    z = 0.88; % página 10 da NBR 6123 - tabela 2
S2 = b*Fr*(z/10)^p; % Classe A/Categoria III    
S3 = 0.95; % fator estatístico, página 10 da NBR 6123

Vk = V0*S1*S2*S3;

%2°) Cálculo da pressão dinâmica q:
densidade = 1.225; %[kg/m³] usada na NBR 6123

q = (densidade*(Vk^2))/2;

%3°) Cálculo da força de vento:
area_poste = 0.33; %[m²] área da face contrária à prateleia e bateria
angulo = 20; %[°] angulação da placa
area_placa = 0.545*0.668*((angulo*pi)/180); %[m²] área da placa exposta ao escoamento

Fposte = q*area_poste;
fprintf('Força no poste = %f N\n', Fposte)

Fplaca = q*area_placa;
fprintf('Força na placa = %f N\n', Fplaca)