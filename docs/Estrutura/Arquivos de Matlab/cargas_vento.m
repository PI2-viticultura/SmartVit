clear all;
clc;

%%%%%%%%%%%%%%%%%%%% C�lculo da for�a do vento no poste


%1�) C�lculo de Vk:
V0 = 35; %[m/s] gr�fico de isoplatas, p�gina 6 NBR 6123
S1 = 1; % fator topogr�fico, p�gina 5 da NBR 6123

    b = 0.94; % p�gina 9 da NBR 6123 - tabela 1
    Fr = 1; % p�gina 9 da NBR 6123 - tabela 1 - usa o da categoria 2, a norma fala isso
    p = 0.1; % p�gina 9 da NBR 6123 - tabela 1
    z = 0.88; % p�gina 10 da NBR 6123 - tabela 2
S2 = b*Fr*(z/10)^p; % Classe A/Categoria III    
S3 = 0.95; % fator estat�stico, p�gina 10 da NBR 6123

Vk = V0*S1*S2*S3;

%2�) C�lculo da press�o din�mica q:
densidade = 1.225; %[kg/m�] usada na NBR 6123

q = (densidade*(Vk^2))/2;

%3�) C�lculo da for�a de vento:
area_poste = 0.33; %[m�] �rea da face contr�ria � prateleia e bateria
angulo = 20; %[�] angula��o da placa
area_placa = 0.545*0.668*((angulo*pi)/180); %[m�] �rea da placa exposta ao escoamento

Fposte = q*area_poste;
fprintf('For�a no poste = %f N\n', Fposte)

Fplaca = q*area_placa;
fprintf('For�a na placa = %f N\n', Fplaca)