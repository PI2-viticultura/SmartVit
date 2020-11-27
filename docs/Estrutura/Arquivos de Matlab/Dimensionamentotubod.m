%% Dados para o c�lculo do dimensionamento da tubula��o lateral
    %Comprimento(m):
    L=90;
    %Espa�amento(m):
    Se=1.5;
    %Vaz�o de cada emissor (m^3/s)
    q=3.5*2.77778e-7;
    %Press�o de Serviso (m.c.a)
    PS=10;
    %Velocidade da �gua dentro da tubula��o (m/s)
    v=0.9;
    %Viscosidade a 20�C (m�s^-1)
    u=0.000001;
    %Tamanho do gotejador????? (mm)
    n=5;
    %Acelera��o da gravidade
    g=9.8;
    %Coeficiente de rugosidade(Para tubos de polietileno)
    C=144;
    
%% C�lculo do dimensionamento da tubula��o lateral 
%utilizando a equa��o de Hazen Willians- ideal para tubos
%maiores que 50mm
x=1;
Ah=1;
hf=0;
while Ah>hf
     
%Poss�veis Di�metro do fio:
P=[20 25 32 40 50 63 75 90 110 125 140 160 180 200 225 250 280 315 355 400 450 500];
D1=P(x);
%N�mero de emissores:
N=L/Se;
%Vaz�o(m^3/s)
Q=N*q;
%1)Perda de carga permiss�vel
hf=0.2*PS;
%2) N�mero de Reynolds
Re=(v*D1)/u;
if Re>=4000
    f=0.3/(Re^0.25);
else
    f=64/Re;
end
%3)Perda de carga unit�ria
J=10.646*(1/(D1^4.87))*(Q/C)^1.852;
m=1.85; %Constante para a equa��o de H-W
%Fator de corre��o
    F=(1/(m+1))+(1/(2*N))+(sqrt(m-1))/(6*N^2);
%4)C�lculo da Perda de Carga nas Tubula��es Laterais
Ah=J*F*L*(Q/100)^1.852;
x=x+1;
end

%% Dados para o c�lculo das tubula��es de deriva��o
%Comprimento da tubula��o de deriva��o(m)
Ltd=30;
%Espa�amento entre as tubula��es
Stl=3;
%Desn�vel do terreno (%)
Dn=0.5;
%% C�lculo das Tubula��es de Deriva��o h-w (Pode ser pvc)
Ahtl=1;
hf2=0;
y=1;
while Ahtl>hf2
P2=[20 25 32 40 50 60 63 75 85 90 110 125 140 160 180 200 225 250 280 315 355 400 450 500];
D2=P2(y);
Qtd=30*2*Q;
Az=(Dn*Ltd)/100;
%N�mero de tubula��es laterais
N2=Ltd/Stl;
if Az>=0
    hf2=((0.3*PS))-Az;
end
if Az<=0 
    hf2=((0.3*PS))+Az;
end
%Perda de carga unit�ria
J2=10.646*(1/(D1^4.87))*(Q/C)^1.852;
m=1.85; %Constante para a equa��o de H-W
%Fator de corre��o
    F2=(1/(m+1))+(1/(2*N2))+(sqrt(m-1))/(6*N2^2);
%C�lculo da Perda de Carga nas Tubula��es Laterais
Ahtl=J2*F2*Ltd*(Q/100)^1.852;
y=y+1;
end
%% Dados para o c�lculo das tubula��es principais
%Vaz�o dos tubos principais:
Q3 = 0.00997;
%Velocidade da �gua
V3=1.5;
%% C�lculo das Tubula��es Principais
D3=sqrt(1.2732*Q3/V3)*1000;
%% Resultados
formatSpec="O di�metro para a tubula��o lateral,tubula��o de deriva��o e tubula��es principais (respectivamente): %d mm, %d mm e %d mm.";
str=sprintf(formatSpec,D1,D2,round(D3))