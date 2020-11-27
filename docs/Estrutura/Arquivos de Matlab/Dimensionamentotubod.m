%% Dados para o cálculo do dimensionamento da tubulação lateral
    %Comprimento(m):
    L=90;
    %Espaçamento(m):
    Se=1.5;
    %Vazão de cada emissor (m^3/s)
    q=3.5*2.77778e-7;
    %Pressão de Serviso (m.c.a)
    PS=10;
    %Velocidade da água dentro da tubulação (m/s)
    v=0.9;
    %Viscosidade a 20°C (m²s^-1)
    u=0.000001;
    %Tamanho do gotejador????? (mm)
    n=5;
    %Aceleração da gravidade
    g=9.8;
    %Coeficiente de rugosidade(Para tubos de polietileno)
    C=144;
    
%% Cálculo do dimensionamento da tubulação lateral 
%utilizando a equação de Hazen Willians- ideal para tubos
%maiores que 50mm
x=1;
Ah=1;
hf=0;
while Ah>hf
     
%Possíveis Diâmetro do fio:
P=[20 25 32 40 50 63 75 90 110 125 140 160 180 200 225 250 280 315 355 400 450 500];
D1=P(x);
%Número de emissores:
N=L/Se;
%Vazão(m^3/s)
Q=N*q;
%1)Perda de carga permissível
hf=0.2*PS;
%2) Número de Reynolds
Re=(v*D1)/u;
if Re>=4000
    f=0.3/(Re^0.25);
else
    f=64/Re;
end
%3)Perda de carga unitária
J=10.646*(1/(D1^4.87))*(Q/C)^1.852;
m=1.85; %Constante para a equação de H-W
%Fator de correção
    F=(1/(m+1))+(1/(2*N))+(sqrt(m-1))/(6*N^2);
%4)Cálculo da Perda de Carga nas Tubulações Laterais
Ah=J*F*L*(Q/100)^1.852;
x=x+1;
end

%% Dados para o cálculo das tubulações de derivação
%Comprimento da tubulação de derivação(m)
Ltd=30;
%Espaçamento entre as tubulações
Stl=3;
%Desnível do terreno (%)
Dn=0.5;
%% Cálculo das Tubulações de Derivação h-w (Pode ser pvc)
Ahtl=1;
hf2=0;
y=1;
while Ahtl>hf2
P2=[20 25 32 40 50 60 63 75 85 90 110 125 140 160 180 200 225 250 280 315 355 400 450 500];
D2=P2(y);
Qtd=30*2*Q;
Az=(Dn*Ltd)/100;
%Número de tubulações laterais
N2=Ltd/Stl;
if Az>=0
    hf2=((0.3*PS))-Az;
end
if Az<=0 
    hf2=((0.3*PS))+Az;
end
%Perda de carga unitária
J2=10.646*(1/(D1^4.87))*(Q/C)^1.852;
m=1.85; %Constante para a equação de H-W
%Fator de correção
    F2=(1/(m+1))+(1/(2*N2))+(sqrt(m-1))/(6*N2^2);
%Cálculo da Perda de Carga nas Tubulações Laterais
Ahtl=J2*F2*Ltd*(Q/100)^1.852;
y=y+1;
end
%% Dados para o cálculo das tubulações principais
%Vazão dos tubos principais:
Q3 = 0.00997;
%Velocidade da água
V3=1.5;
%% Cálculo das Tubulações Principais
D3=sqrt(1.2732*Q3/V3)*1000;
%% Resultados
formatSpec="O diâmetro para a tubulação lateral,tubulação de derivação e tubulações principais (respectivamente): %d mm, %d mm e %d mm.";
str=sprintf(formatSpec,D1,D2,round(D3))