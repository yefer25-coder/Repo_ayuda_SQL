Enunciado Prueba de Desempeño – Módulo 4
(Bases de Datos SQL)
“Primero se lee, se entiende, se planea y después se desarrolla.
Lo último que se hace en un proyecto es el código fuente.”
Introducción
Eres parte del equipo de desarrollo asignado por ExpertSoft, una empresa de software
que desarrolla productos para el sector eléctrico en Colombia. En la actualidad, uno de los
clientes de ExpertSoft enfrenta dificultades en la gestión de información financiera
proveniente de plataformas Fintech como Nequi y Daviplata, ya que los datos están
desorganizados y dispersos en múltiples archivos de Excel (.xlsx).
Tu misión como desarrollador es proponer e implementar una solución que permita
organizar y estructurar esta información en una base de datos SQL, facilitando su carga,
almacenamiento y posterior administración mediante un sistema CRUD, junto con
consultas clave que respondan a las necesidades del cliente.
Objetivo
El objetivo de esta prueba es que, como desarrollador:
• Analices la información entregada en el archivo Excel y la normalices
manualmente aplicando las tres primeras formas normales (1FN, 2FN, 3FN).
• Construyas un modelo relacional que represente la estructura final de la
información normalizada.
• Crees y configures la base de datos SQL según tu modelo.
• Implementes la carga masiva de datos desde CSV a la base ya creada.
• Desarrolles un CRUD para administrar una de las entidades de tu modelo.
• Implementes consultas avanzadas que permitan resolver requerimientos
planteados por el cliente.
Requisitos técnicos
Normalización y modelo relacional
• Analizar el archivo Excel desorganizado.
• Convertirlo a CSV para facilidad de carga.
• Diseñar un modelo relacional aplicando 1FN, 2FN y 3FN.
• El modelo debe hacerse manualmente en draw.io (sugerido) o cualquier otra
herramienta similar, no autogenerado por Workbench ni similares.
• Guardar el modelo como imagen o PDF.
Creación de la base de datos (pd_primernombre_primerapellido_clan)
• Implementar el DDL completo de la base de datos.
• Todas las tablas y atributos deben estar en inglés.
• Incluir claves primarias, foráneas y restricciones (NOT NULL, UNIQUE, etc.).
• La base de datos debe existir antes de la carga masiva.
• Es obligatorio entregar el archivo .sql con el script que utilizaste para crear la
estructura de la base de datos.
Carga masiva desde CSV (solo datos)
• El archivo original se entregará en formato Excel (.xlsx).
• Debes convertirlo a CSV para facilitar la carga en la base de datos.
• El proceso de carga debe ejecutarse de manera local, pudiendo implementarse
de las siguientes formas:
 Mediante un script que se ejecute manualmente.
 Mediante un botón en el frontend que dispare la ejecución del script
local.
• La correcta inserción de los datos debe estar documentada en el README.md.
Sistema CRUD y Dashboard
• Implementar Create, Read, Update y Delete para una de las entidades de tu
modelo mediante la creación de un api (express).
• Validar datos antes de insertarlos o actualizarlos.
• Incluir un dashboard que funcionará como frontend mínimo y sencillo para la
gestión de esta entidad.
• El frontend puede desarrollarse con frameworks/librerías CSS como Bootstrap,
Tailwind o Bulma.
• El diseño visual no es prioritario, pero el funcionamiento del CRUD debe ser
completo.
Consultas avanzadas (solo desde Postman)
1. Total pagado por cada cliente
"Como administrador del sistema, necesito saber cuánto ha pagado cada cliente en
total, para poder llevar un control de los ingresos y verificar los saldos generales."
2. Facturas pendientes con información de cliente y transacción asociada
"Como responsable financiero, necesito identificar las facturas que aún no han sido
pagadas completamente, junto con el nombre del cliente y la transacción
correspondiente, para gestionar el cobro o seguimiento."
3. Listado de transacciones por plataforma
"Como analista, necesito poder ver todas las transacciones hechas desde una
plataforma específica (como Nequi o Daviplata), incluyendo a qué cliente
pertenecen y qué factura están pagando."
Colección de Postman
Debe incluir:
• Endpoints del CRUD.
• Endpoints de las 3 consultas avanzadas.
• Debe adjuntarse en el repositorio.
Documentación
Incluir un README.md en inglés con:
• Descripción del sistema.
• Instrucciones para ejecutar el proyecto.
• Tecnologías utilizadas.
• Explicación de la normalización.
• Instrucciones para la carga masiva desde CSV.
• Explicación de las consultas avanzadas.
• Captura del modelo relacional.
• Datos del desarrollador (nombre, clan, correo).
Puntos extra (máximo +10 pts sin superar la nota máxima)
• Implementar carga masiva desde CSV mediante un endpoint.
Criterios de aceptación
• Modelo relacional: bien estructurado, normalizado, entregado como imagen o
PDF.
• Base de datos: creada correctamente con DDL completo y nombres en inglés.
• Carga masiva desde CSV: funcional y documentada.
• CRUD: implementado y con dashboard funcional.
• Frontend: sencillo y funcional.
• Postman: colección completa con CRUD + 3 consultas avanzadas.
• README.md: claro, completo y en inglés.
Entregables
• Carpeta del proyecto comprimida en .zip y subida a Moodle.
• Repositorio público en GitHub con:
 Código fuente backend y frontend.
 DDL de la base de datos.
 Modelo relacional.
 Archivo CSV.
 Colección de Postman.
 README.md documentado.





tabla para normalizar
ID de la Transacción	Fecha y Hora de la Transacción	Monto de la Transacción	Estado de la Transacción	Tipo de Transacción	Nombre del Cliente	Número de Identificación	Dirección	Teléfono	Correo Electrónico	Plataforma Utilizada	Número de Factura	Periodo de Facturación	Monto Facturado	Monto Pagado
TXN001	2024-06-01 10:00:00	38940	Pendiente	Pago de Factura	Angel Daniel	149186547	USNS Davis FPO AP 78518	(873)222-2692x09480	rmiller@boyer.com	Nequi	FAC7068	2024-06	39940	0
TXN002	2024-07-09 12:00:00	75145	Pendiente	Pago de Factura	Matthew Wilson	475925688	42023 Barrett Path Suite 281 Jeremyborough, OH 72889	(264)225-7425	matthew15@ramirez.com	Daviplata	FAC6577	2024-06	76145	75145
TXN003	2024-06-13 10:00:00	179217	Fallida	Pago de Factura	Jennifer Phelps	112231541	392 Smith Corners Apt. 737 East Angeltown, MO 64086	248.695.2117	echristian@hotmail.com	Daviplata	FAC5707	2024-06	179217	179217
TXN004	2024-07-26 13:00:00	51767	Fallida	Pago de Factura	Jonathan Cook	708283326	657 Landry Way Suite 966 Robinsonfurt, CA 22461	0756633727	zjones@yahoo.com	Daviplata	FAC7188	2024-07	52267	51767
TXN005	2024-07-28 06:00:00	156501	Completada	Pago de Factura	Lindsay Garcia	959234562	906 Justin Locks Apt. 838 Port Timothyview, AR 68865	001-158-358-0277	juliamatthews@carpenter.com	Daviplata	FAC7289	2024-06	157001	156501
TXN006	2024-07-16 21:00:00	32428	Completada	Pago de Factura	Eric Klein	243553915	0571 Carroll Cliffs Davisstad, WI 00721	9179003714	acostajoshua@hotmail.com	Nequi	FAC2190	2024-07	33428	32428
TXN007	2024-07-26 22:00:00	75301	Pendiente	Pago de Factura	Ashley Adams	7005498	660 Marcus Camp Suite 262 Port Stevenmouth, NC 10819	(224)273-1751x2329	elambert@cook.info	Daviplata	FAC6207	2024-07	75801	0
TXN008	2024-06-17 16:00:00	16870	Pendiente	Pago de Factura	Meghan Nguyen	724330039	259 Jared Manor Brownville, AZ 52844	767.278.8207	hhughes@randolph-ingram.com	Nequi	FAC1691	2024-07	17870	16870
TXN009	2024-07-10 23:00:00	21794	Fallida	Pago de Factura	Ryan Richards	643387222	695 Francis Cliffs Port Bryantown, VT 33873	001-398-345-1521x215	phillipcarter@hotmail.com	Nequi	FAC4680	2024-06	22294	21794
TXN010	2024-06-19 23:00:00	193307	Completada	Pago de Factura	Janice Alexander	215716832	81268 Hamilton Fort Fitzgeraldfort, ID 71489	+1-411-073-0697x704	matthew55@leach-blackburn.com	Daviplata	FAC8010	2024-06	193307	0
TXN011	2024-06-01 06:00:00	159093	Completada	Pago de Factura	Katherine Dunn	92651576	837 Schneider Spur Suite 656 Darrellmouth, WI 33323	6081126986	golson@davis.info	Daviplata	FAC1328	2024-07	159093	0
TXN012	2024-07-12 19:00:00	174518	Pendiente	Pago de Factura	Brett Odom	724488250	952 Barbara Turnpike Jacquelinebury, MO 71346	550.725.0901	colemanjames@chavez.info	Nequi	FAC8140	2024-06	175018	0
TXN013	2024-07-04 12:00:00	110254	Fallida	Pago de Factura	Jenna Scott	265881315	Unit 1694 Box 1865 DPO AE 26667	404-358-1223x371	rogerseric@hotmail.com	Daviplata	FAC4679	2024-07	110754	0
TXN014	2024-07-12 04:00:00	162283	Pendiente	Pago de Factura	Andrew Johns	401149568	62457 Booth Mews Apt. 453 Lake Vincentport, DE 49208	894-499-5852x2479	lorinelson@hotmail.com	Nequi	FAC3589	2024-06	163283	0
TXN015	2024-06-21 12:00:00	22161	Pendiente	Pago de Factura	Christine Curtis	778029406	2480 Jesse Unions Suite 534 East Antonioshire, MS 71510	554.861.0493x592	christopherferguson@acevedo-robertson.info	Daviplata	FAC6122	2024-07	22161	22161
TXN016	2024-07-08 12:00:00	195775	Pendiente	Pago de Factura	Madison Jones	307805784	USNS Ferguson FPO AP 50263	149.766.5747	wattsdavid@morgan-wheeler.com	Daviplata	FAC4870	2024-07	196275	195775
TXN017	2024-06-27 03:00:00	20824	Fallida	Pago de Factura	Tracy Simmons	484837788	76775 Jennifer Orchard Apt. 758 Port Lance, NH 53890	0383343588	bryan30@williams.com	Nequi	FAC5322	2024-06	20824	20824
TXN018	2024-07-09 05:00:00	191134	Completada	Pago de Factura	Shelby Wolf	962795476	613 Billy Radial Suite 171 South Benjamin, WY 15230	7506854443	daniel46@gmail.com	Nequi	FAC8663	2024-07	191634	0
TXN019	2024-06-16 20:00:00	62979	Completada	Pago de Factura	Kyle Jackson	965030358	24896 Helen Rapid Suite 758 New Joseph, MN 97017	001-392-237-6541x8420	pwheeler@yahoo.com	Daviplata	FAC4380	2024-06	62979	0
TXN020	2024-06-08 22:00:00	36472	Fallida	Pago de Factura	Linda Shepard	644042817	4947 Reynolds Islands Kathleenburgh, DE 96988	2931087130	munozcharles@yahoo.com	Daviplata	FAC5128	2024-06	37472	0
TXN021	2024-06-16 06:00:00	127881	Completada	Pago de Factura	Kathleen Brady	689720635	Unit 6453 Box 5308 DPO AA 48049	2253893664	victoria31@gmail.com	Nequi	FAC7986	2024-06	128381	127881
TXN022	2024-07-30 03:00:00	26317	Fallida	Pago de Factura	Bobby Luna	800125157	2923 Michael Fords Suite 316 Dustinton, IN 31032	001-549-919-1859	kathryn43@hotmail.com	Daviplata	FAC7543	2024-06	26817	0
TXN023	2024-07-27 01:00:00	147364	Pendiente	Pago de Factura	Richard Lopez	268619593	6875 Hill Forks Teresaland, AL 58910	+1-418-560-8033x44588	justinallen@quinn.info	Nequi	FAC7964	2024-07	147864	147364
TXN024	2024-06-26 01:00:00	153404	Pendiente	Pago de Factura	Ralph Bush	625774276	03975 Mills Square Apt. 322 Port Claudia, MI 34792	+1-866-778-9252x6524	bradleyamy@doyle.com	Daviplata	FAC1309	2024-06	153404	153404
TXN025	2024-07-07 10:00:00	14210	Completada	Pago de Factura	David Webb	569906245	3613 Laura Ridges Suite 762 South Theresa, VA 98493	993.305.1410	stevenrodriguez@gmail.com	Nequi	FAC8025	2024-07	14710	0
TXN026	2024-06-08 19:00:00	49012	Completada	Pago de Factura	Kim Russell	328037408	887 Kelley Walk Apt. 960 East Martha, CT 59649	001-136-251-3102x24346	cindy11@wood.com	Daviplata	FAC8943	2024-06	49512	49012
TXN027	2024-06-28 06:00:00	40302	Fallida	Pago de Factura	Michael Holt	969677194	3499 David Lake Suite 745 South Dylan, AK 03041	882-041-3572	rmiller@hubbard-benitez.com	Daviplata	FAC1190	2024-07	40302	40302
TXN028	2024-07-03 01:00:00	27833	Pendiente	Pago de Factura	Mr. Justin Cook	796337665	Unit 9907 Box 4757 DPO AE 46640	737.675.5823	ofritz@richards.com	Daviplata	FAC4264	2024-07	27833	27833
TXN029	2024-07-29 02:00:00	30313	Fallida	Pago de Factura	Timothy Wood	636808209	836 Bates Points Port Andrewshire, GA 83721	001-948-037-6474	christina78@yahoo.com	Nequi	FAC1462	2024-07	30813	0
TXN030	2024-07-26 20:00:00	134884	Fallida	Pago de Factura	Yolanda Hines	975617669	812 Mccarthy Viaduct Apt. 376 Kristinamouth, AL 43563	(659)333-4905	cscott@hotmail.com	Daviplata	FAC6381	2024-07	134884	134884
TXN031	2024-07-03 10:00:00	28982	Completada	Pago de Factura	Jasmine Kelly	569390187	697 Reynolds Dam Apt. 423 Jacobland, MO 89387	843-277-1394	fitzgeraldelizabeth@yahoo.com	Nequi	FAC8571	2024-07	29482	28982
TXN032	2024-06-15 17:00:00	158030	Pendiente	Pago de Factura	Robert Smith	325459789	Unit 2774 Box 4368 DPO AE 01041	001-595-596-1706x9253	smithtimothy@wallace.com	Nequi	FAC7018	2024-06	158030	158030
TXN033	2024-06-24 08:00:00	196009	Fallida	Pago de Factura	Jonathan Smith	325603096	322 Smith Pines Suite 052 Lake Scotthaven, NM 11543	796.397.5185x7448	debragriffin@hotmail.com	Daviplata	FAC4082	2024-07	196509	196009
TXN034	2024-06-22 17:00:00	68526	Pendiente	Pago de Factura	Erin Marshall	819212515	04382 Edward Mountains Suite 369 Georgeberg, ME 94518	793.145.6997x893	sethsmith@robinson.com	Daviplata	FAC5756	2024-06	69026	68526
TXN035	2024-06-23 12:00:00	165287	Completada	Pago de Factura	Mark Ford	444056964	07900 Friedman Ferry Suite 170 South Christina, WV 53142	+1-407-009-2402	millerricardo@hotmail.com	Nequi	FAC9278	2024-06	166287	0
TXN036	2024-06-28 11:00:00	178265	Fallida	Pago de Factura	Cynthia Lee	717643055	368 Jones Estates Apt. 059 Jonesstad, NY 59968	+1-822-188-2029x6929	christinaflores@jones.org	Nequi	FAC6223	2024-06	179265	178265
TXN037	2024-07-23 18:00:00	98069	Completada	Pago de Factura	Sean Hood	30122773	7426 Middleton Hill Suite 303 Millerview, CO 23232	+1-348-069-6954x792	cynthiaevans@hernandez.com	Nequi	FAC8510	2024-07	98069	98069
TXN038	2024-07-28 00:00:00	153150	Completada	Pago de Factura	Kim Stephens	622536043	12967 Ryan Shoals Apt. 994 Port Jesse, MO 86007	(092)586-3570x54204	karen28@johnson.com	Nequi	FAC4305	2024-06	153650	153150
TXN039	2024-06-05 12:00:00	86902	Pendiente	Pago de Factura	Adam Mckinney	747822485	572 Tammy Forest Youngside, SD 92567	813.559.4153x962	fwilliams@lewis-wu.org	Daviplata	FAC9358	2024-06	87402	0
TXN040	2024-06-28 04:00:00	96457	Pendiente	Pago de Factura	Valerie Brown	857630459	2739 Hood Rest Apt. 962 Johnburgh, UT 27169	869.591.7228	qmcgee@gmail.com	Nequi	FAC1208	2024-07	97457	96457
TXN041	2024-06-07 20:00:00	145586	Fallida	Pago de Factura	Jason Pace	204909440	19964 Edwards Pines South Jeremystad, AZ 79080	001-517-371-6236x2223	tjohnson@yahoo.com	Daviplata	FAC5492	2024-07	145586	0
TXN042	2024-07-15 19:00:00	163425	Fallida	Pago de Factura	Gregory Anderson	241114561	5395 Brandon Freeway Apt. 858 North Melissa, OR 60184	+1-282-173-3048x555	julie98@cortez.com	Nequi	FAC6585	2024-07	163925	163425
TXN043	2024-07-26 02:00:00	186218	Pendiente	Pago de Factura	Rebecca Avila	494808313	78969 Mcguire Springs Suite 562 Port Christopher, NJ 29478	773.248.1617	pwilson@sanchez.com	Nequi	FAC2187	2024-07	186218	186218
TXN044	2024-07-12 01:00:00	159000	Fallida	Pago de Factura	Morgan Leon	315164793	853 Virginia Cape Suite 757 Wilsonport, SC 89614	001-853-081-5933x565	miranda94@yahoo.com	Daviplata	FAC7545	2024-07	160000	159000
TXN045	2024-07-21 21:00:00	94554	Pendiente	Pago de Factura	Fernando Hunt	505327194	9609 Conner Track Apt. 859 Kristenberg, MD 40765	5863279231	abigailkelly@johnson.net	Daviplata	FAC9699	2024-07	94554	94554
TXN046	2024-07-26 11:00:00	152659	Fallida	Pago de Factura	Jason Luna	892962448	204 Laura Hill Craigland, OK 08760	600.123.2569x570	rodriguezrhonda@yahoo.com	Daviplata	FAC2512	2024-07	153659	0
TXN047	2024-06-05 17:00:00	165021	Pendiente	Pago de Factura	Gregory Howell	394523505	036 Tyler Groves Suite 302 Danielsfurt, WV 45483	213-496-7129x11054	david12@young.org	Daviplata	FAC1330	2024-06	165021	0
TXN048	2024-06-10 10:00:00	115066	Completada	Pago de Factura	Miguel Sharp MD	763963140	47921 Johnson Expressway Suite 742 Oliviaport, PA 16931	001-600-899-5324	sgeorge@ramos-acevedo.net	Daviplata	FAC9310	2024-07	115066	0
TXN049	2024-06-03 20:00:00	161029	Completada	Pago de Factura	Stephanie Acosta	594590875	7067 Henderson Knoll Joshuashire, NJ 84213	001-365-629-8075x05840	joshuahenderson@pierce-ramos.com	Daviplata	FAC9524	2024-06	161529	0
TXN050	2024-07-29 03:00:00	167924	Completada	Pago de Factura	Julia Davis	25832528	0246 Brown Roads Suite 606 North Luisburgh, WI 38462	674-440-7862	barkerbrent@berg-dougherty.com	Nequi	FAC7938	2024-07	167924	167924
TXN051	2024-07-24 19:00:00	147991	Pendiente	Pago de Factura	Amy Woods	97866586	247 Sheila Centers North Troybury, WA 43836	2338512573	paul38@byrd.info	Daviplata	FAC8649	2024-06	147991	0
TXN052	2024-07-26 11:00:00	124048	Completada	Pago de Factura	Julie Dunn	79987146	758 Ruth Mall Briggstown, MA 48538	883-656-1878x6532	melissawebb@gmail.com	Nequi	FAC4348	2024-07	124048	124048
TXN053	2024-07-13 23:00:00	138162	Completada	Pago de Factura	Nicole Mcdonald	520620439	7229 Michelle Forges Suite 411 Hardyview, VT 06858	+1-692-758-5774x3951	frederickmarshall@evans.biz	Nequi	FAC9905	2024-07	138162	0
TXN054	2024-06-28 00:00:00	161137	Fallida	Pago de Factura	Jennifer Mendoza	260613460	11916 Katherine Creek Kathleenport, ND 68479	203-605-2009x1103	susanchapman@gmail.com	Nequi	FAC5210	2024-06	161137	161137
TXN055	2024-06-17 03:00:00	35669	Fallida	Pago de Factura	Rachel Fisher	511962082	38507 Newman Loop Suite 268 Tommyberg, UT 25108	650-424-8808	bgarcia@johnson.org	Daviplata	FAC8033	2024-06	35669	0
TXN056	2024-07-06 07:00:00	67867	Fallida	Pago de Factura	Jorge Thomas	527088924	013 Tabitha Cliff Stevenmouth, NJ 04089	921-668-1704x3013	jason19@yahoo.com	Nequi	FAC7850	2024-07	68367	0
TXN057	2024-07-25 20:00:00	58242	Fallida	Pago de Factura	Robert Hicks	181982363	1639 Delacruz Park East Linda, DC 18242	(335)290-8992	powelllarry@hotmail.com	Nequi	FAC7378	2024-07	58242	0
TXN058	2024-06-09 20:00:00	113319	Pendiente	Pago de Factura	Terry Watson	87147005	0047 Lori Square East Josechester, KS 29146	(426)053-2668	kaiserwilliam@hotmail.com	Nequi	FAC3104	2024-07	114319	113319
TXN059	2024-07-11 23:00:00	37708	Completada	Pago de Factura	Carlos Wood	623072602	53828 Laura Spurs Lauraville, DE 53316	440-516-4972x0722	hillwilliam@hotmail.com	Daviplata	FAC2382	2024-06	37708	37708
TXN060	2024-07-20 16:00:00	54969	Pendiente	Pago de Factura	Richard Weiss	729577216	316 Robert Dam North Christina, MA 15552	521-212-3209x2220	carla37@gmail.com	Nequi	FAC6022	2024-07	54969	0
TXN061	2024-07-08 23:00:00	51411	Completada	Pago de Factura	Sarah Clark	696739719	04967 Nguyen Circle Suite 871 Lake Andrea, NY 87021	853.981.8171	wsanchez@christian.com	Daviplata	FAC3529	2024-06	51911	0
TXN062	2024-07-17 05:00:00	45233	Completada	Pago de Factura	Briana Wu	520971718	534 Campbell View Sandersland, FL 59798	(177)732-3856x95766	rachelsmith@frey.com	Nequi	FAC1856	2024-06	45733	45233
TXN063	2024-06-10 01:00:00	99926	Fallida	Pago de Factura	Raven Jordan	785949232	6132 Spencer Corner Apt. 383 Lake Loriberg, MA 96874	001-870-036-3211	rayalexa@yahoo.com	Nequi	FAC5678	2024-07	100426	0
TXN064	2024-06-20 12:00:00	31572	Completada	Pago de Factura	Angelica Gibbs	519768710	68574 Coleman Villages Suite 522 North Erikaton, CA 83413	+1-378-867-9488x99135	yarnold@smith-bruce.com	Nequi	FAC7474	2024-07	32072	31572
TXN065	2024-06-14 03:00:00	123720	Pendiente	Pago de Factura	Tammy Jacobs	64271785	57458 Collier Junctions Suite 288 Lake Nicholas, CT 00530	227.597.0062	scottroger@gmail.com	Nequi	FAC9956	2024-07	123720	0
TXN066	2024-07-29 14:00:00	17171	Fallida	Pago de Factura	Michael Evans	357901640	921 Ramirez Mount New Anthonyville, ND 52047	6777129275	steven80@yahoo.com	Daviplata	FAC7570	2024-06	17171	0
TXN067	2024-07-23 09:00:00	56259	Fallida	Pago de Factura	Tony Pham	830210363	Unit 3715 Box 5620 DPO AA 18266	001-094-782-5703	kendrapena@yahoo.com	Daviplata	FAC2909	2024-06	57259	0
TXN068	2024-06-20 22:00:00	196548	Fallida	Pago de Factura	Miss Carrie Underwood	696962875	USNV Morris FPO AA 49085	0792914312	amy45@hotmail.com	Daviplata	FAC2139	2024-07	197548	0
TXN069	2024-06-20 18:00:00	93635	Completada	Pago de Factura	Ryan Russell	896950954	70003 Tiffany Drives Robertchester, IA 05998	001-266-212-7928x22281	michael78@walters.com	Daviplata	FAC8752	2024-06	93635	0
TXN070	2024-07-15 21:00:00	58585	Completada	Pago de Factura	Kimberly Bennett	196811583	70851 Daniel Station Apt. 975 Hernandezton, IL 77476	(083)724-9058x016	smithmichelle@gmail.com	Daviplata	FAC8107	2024-07	58585	58585
TXN071	2024-06-06 18:00:00	86244	Completada	Pago de Factura	Joshua Neal	893866597	1324 William Glens New Jenniferland, IL 16679	001-256-341-5493x0374	wheelerbrandon@hotmail.com	Daviplata	FAC7475	2024-06	87244	0
TXN072	2024-07-18 20:00:00	55572	Fallida	Pago de Factura	Robert Rodriguez	291010345	9483 Patricia Greens Suite 612 West Daniel, CT 37484	562-175-6225x4306	steven70@gmail.com	Nequi	FAC3660	2024-06	55572	0
TXN073	2024-06-21 06:00:00	50713	Fallida	Pago de Factura	Blake Ford	915064128	933 Casey Court Apt. 193 Lake Douglas, AL 33325	276-740-5323x764	wrightsally@hotmail.com	Nequi	FAC9573	2024-06	51213	50713
TXN074	2024-06-29 18:00:00	129480	Completada	Pago de Factura	Chad Garcia	11426912	195 Rollins Land Suite 478 North Angelastad, IN 84674	(530)211-7419	john27@schaefer.com	Nequi	FAC2238	2024-06	129980	129480
TXN075	2024-07-03 20:00:00	41657	Completada	Pago de Factura	Autumn Webb	174039328	198 Frazier Branch Suite 399 South Sharon, AR 75490	907-357-6151x4325	davidreed@hotmail.com	Daviplata	FAC6979	2024-06	42157	41657
TXN076	2024-06-15 11:00:00	126084	Completada	Pago de Factura	Elizabeth Singleton	565067343	87020 Horton Valleys Rodriguezfurt, WV 03348	173.672.3805	jeffreyhahn@dawson-myers.biz	Daviplata	FAC8740	2024-06	127084	0
TXN077	2024-06-04 07:00:00	190936	Fallida	Pago de Factura	Sarah Thompson	333387701	Unit 0218 Box 2805 DPO AA 08015	+1-444-121-3206x307	williamchavez@yahoo.com	Nequi	FAC9872	2024-06	191436	0
TXN078	2024-06-21 21:00:00	78561	Fallida	Pago de Factura	Sarah Martin	355405632	5963 Strong Points Lake Kayla, SC 51830	406-810-6283	earllee@gmail.com	Nequi	FAC9634	2024-06	78561	78561
TXN079	2024-07-23 11:00:00	162844	Completada	Pago de Factura	Pamela Herrera	71585472	3416 Gregory Rapids Suite 629 North Nicolehaven, IL 93329	539.557.9029	cardenasthomas@yahoo.com	Nequi	FAC9210	2024-06	163844	162844
TXN080	2024-06-29 15:00:00	80235	Fallida	Pago de Factura	Shannon Horn	708960117	USNS Buchanan FPO AA 82885	(297)388-2854	brian88@pitts-bush.com	Nequi	FAC3888	2024-07	80735	0
TXN081	2024-06-18 00:00:00	158138	Pendiente	Pago de Factura	Christopher Edwards	626043010	32230 Jeffery Via Apt. 616 West Tanya, WA 77567	(204)535-1285x920	pmcclain@castro-humphrey.com	Daviplata	FAC7110	2024-06	158138	0
TXN082	2024-06-06 15:00:00	101593	Pendiente	Pago de Factura	Brandon Hester	326481119	0169 Summers Vista West Stuart, UT 98685	836.687.2362x166	huertatracie@yahoo.com	Daviplata	FAC5649	2024-06	102093	101593
TXN083	2024-06-22 03:00:00	103741	Pendiente	Pago de Factura	Mariah Jackson	599800533	558 Bryan Isle New Raymond, AL 55316	(382)120-4674	eperry@wilson.com	Daviplata	FAC1490	2024-07	104241	103741
TXN084	2024-07-04 02:00:00	41300	Pendiente	Pago de Factura	Carol Lawson	492953650	747 Miller Point Georgeton, UT 90920	783.291.2840	joneskelsey@hotmail.com	Daviplata	FAC5439	2024-06	41300	0
TXN085	2024-06-19 11:00:00	89956	Completada	Pago de Factura	Heather Collins	573712035	7878 Nelson Stravenue New Jacob, NE 62801	+1-960-564-8502x177	thomashansen@hotmail.com	Daviplata	FAC4962	2024-06	90456	0
TXN086	2024-07-13 05:00:00	165402	Completada	Pago de Factura	Joshua Delgado	56103750	741 Morgan Underpass South Sheila, IL 16740	101-802-6501x00181	greenbrandon@gmail.com	Nequi	FAC8801	2024-07	165402	165402
TXN087	2024-07-04 09:00:00	106689	Pendiente	Pago de Factura	Jerry Greene	867865303	60823 Lauren Wall Apt. 074 New Kellyside, MI 21097	(703)649-5080x4789	jay56@white-wiggins.com	Nequi	FAC1904	2024-06	107189	106689
TXN088	2024-06-14 11:00:00	22411	Completada	Pago de Factura	Connor Wagner	355813998	506 Brandy Rapid Dawsonberg, RI 42470	0195959907	haley03@boyd-harris.com	Nequi	FAC7503	2024-07	23411	22411
TXN089	2024-06-27 05:00:00	11359	Pendiente	Pago de Factura	Marcia Randolph	118434130	327 Roberts Neck Gonzalezshire, WA 18952	508.559.9292	huntrussell@smith.com	Daviplata	FAC7561	2024-06	11359	11359
TXN090	2024-06-08 10:00:00	79808	Pendiente	Pago de Factura	John Price	779362405	PSC 5622, Box 3709 APO AA 38900	546-202-9331x88558	daniel62@powell.com	Nequi	FAC5390	2024-06	79808	0
TXN091	2024-07-05 21:00:00	42648	Pendiente	Pago de Factura	Bill Hopkins	499561637	54675 Matthew Key Torresstad, ME 64087	288-662-8572	briannaweeks@gmail.com	Nequi	FAC1760	2024-07	43148	42648
TXN092	2024-06-03 05:00:00	101468	Pendiente	Pago de Factura	Ryan Harrison	179287266	66252 Trevor Harbor Apt. 887 Lake Ambertown, TN 81820	001-320-723-6362x5909	carrie64@hotmail.com	Daviplata	FAC3395	2024-06	102468	0
TXN093	2024-06-21 17:00:00	115488	Pendiente	Pago de Factura	Donald Young	667230218	223 Dawson Mall Suite 571 Smithburgh, MS 75952	929-112-6985x483	stanleyhall@hotmail.com	Daviplata	FAC1926	2024-06	116488	0
TXN094	2024-07-26 00:00:00	61920	Completada	Pago de Factura	Louis Gilbert	311310607	530 Brown Corner Thompsontown, WV 70738	461.203.7672x451	pgreene@hotmail.com	Daviplata	FAC7521	2024-07	61920	0
TXN095	2024-07-23 20:00:00	141510	Fallida	Pago de Factura	Marcus Martin	319413369	PSC 6227, Box 1600 APO AP 14578	+1-071-678-3536x79738	jamesjenkins@harmon-randall.com	Nequi	FAC6693	2024-07	142010	141510
TXN096	2024-07-08 19:00:00	39792	Pendiente	Pago de Factura	Sharon Ingram	861461933	132 Vargas Turnpike Danielbury, DE 40715	270.214.8473x8548	seanbishop@yahoo.com	Daviplata	FAC1513	2024-06	39792	39792
TXN097	2024-07-09 05:00:00	87689	Completada	Pago de Factura	Kyle Martinez	61660425	USS Greene FPO AA 26511	676-110-6562x32575	haleronald@vargas-hernandez.info	Daviplata	FAC3039	2024-07	88189	0
TXN098	2024-07-06 00:00:00	178739	Fallida	Pago de Factura	Elizabeth Rodriguez	603449840	3551 Rodriguez Port Apt. 808 Lake Charles, WI 24322	(677)161-5260x6354	kathyrodriguez@thompson.biz	Nequi	FAC3709	2024-06	179739	0
TXN099	2024-07-27 10:00:00	105611	Fallida	Pago de Factura	Christopher Gomez	917844640	875 Jennifer Oval Suite 067 West Phillipmouth, IL 91337	001-066-886-7181x1777	marcus34@hotmail.com	Daviplata	FAC3914	2024-06	106611	0
TXN100	2024-07-11 07:00:00	141787	Fallida	Pago de Factura	Brian Morton	843106189	431 Rodriguez Estate Suite 894 New Christopherview, TN 74616	+1-352-961-6835x0739	garnold@bender-caldwell.com	Daviplata	FAC8875	2024-06	142787	141787


Modelo Normalizado
Tabla: customers
customer_id	full_name	identification_number	address	phone	email
1	Angel Daniel	149186547	USNS Davis FPO AP 78518	(873)222-2692x09480	rmiller@boyer.com
2	Matthew Wilson	475925688	42023 Barrett Path Suite 281 Jeremyborough, OH 72889	(264)225-7425	matthew15@ramirez.com
3	Jennifer Phelps	112231541	392 Smith Corners Apt. 737 East Angeltown, MO 64086	248.695.2117	echristian@hotmail.com
4	Jonathan Cook	708283326	657 Landry Way Suite 966 Robinsonfurt, CA 22461	0756633727	zjones@yahoo.com
5	Lindsay Garcia	959234562	906 Justin Locks Apt. 838 Port Timothyview, AR 68865	001-158-358-0277	juliamatthews@carpenter.com

Tabla: platforms
platform_id	platform_name
1	Nequi
2	Daviplata

Tabla: invoices
invoice_id	invoice_number	billing_period	billed_amount	paid_amount	customer_id (FK)
1	FAC7068	2024-06	39940	0	1
2	FAC6577	2024-06	76145	75145	2
3	FAC5707	2024-06	179217	179217	3
4	FAC7188	2024-07	52267	51767	4
5	FAC7289	2024-06	157001	156501	5

Tabla: transactions
transaction_id	transaction_code	transaction_datetime	transaction_amount	transaction_status	transaction_type	platform_id (FK)	invoice_id (FK)
1	TXN001	2024-06-01 10:00:00	38940	Pendiente	Pago de Factura	1	1
2	TXN002	2024-07-09 12:00:00	75145	Pendiente	Pago de Factura	2	2
3	TXN003	2024-06-13 10:00:00	179217	Fallida	Pago de Factura	2	3
4	TXN004	2024-07-26 13:00:00	51767	Fallida	Pago de Factura	2	4
5	TXN005	2024-07-28 06:00:00	156501	Completada	Pago de Factura	2	5

Relaciones
Un cliente puede tener muchas facturas (1:N).

Una factura puede tener muchas transacciones (1:N).

Una plataforma puede estar asociada a muchas transacciones (1:N).

Si quieres, puedo ahora pasarte el modelo relacional en draw.io listo para que lo incluyas en tu entrega y el script SQL DDL para crear la base ya normalizada.
¿Quieres que te lo prepare?


SELECT 
    c.customer_id,
    c.full_name,
    SUM(i.paid_amount) AS total_paid
FROM customers c
JOIN invoices i ON c.customer_id = i.customer_id
GROUP BY c.customer_id, c.full_name
ORDER BY total_paid DESC;


SELECT 
    i.invoice_id,
    i.invoice_number,
    i.billing_period,
    i.billed_amount,
    i.paid_amount,
    (i.billed_amount - i.paid_amount) AS pending_amount,
    c.full_name AS customer_name,
    t.transaction_code,
    t.transaction_status
FROM invoices i
JOIN customers c ON i.customer_id = c.customer_id
LEFT JOIN transactions t ON i.invoice_id = t.invoice_id
WHERE i.paid_amount < i.billed_amount
ORDER BY pending_amount DESC;



SELECT 
    i.invoice_id,
    i.invoice_number,
    i.billing_period,
    i.billed_amount,
    i.paid_amount,
    (i.billed_amount - i.paid_amount) AS pending_amount,
    c.full_name AS customer_name,
    t.transaction_code,
    t.transaction_status
FROM invoices i
JOIN customers c ON i.customer_id = c.customer_id
LEFT JOIN transactions t ON i.invoice_id = t.invoice_id
WHERE i.paid_amount < i.billed_amount
ORDER BY pending_amount DESC;






-- Crear la base de datos (cambia tu nombre y apellido)
CREATE DATABASE IF NOT EXISTS pd_tunombre_tuapellido_clan;
USE pd_tunombre_tuapellido_clan;

-- =========================
-- 1. Tabla de Clientes
-- =========================
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    identification_number VARCHAR(20) NOT NULL UNIQUE,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- =========================
-- 2. Tabla de Plataformas
-- =========================
CREATE TABLE platforms (
    platform_id INT PRIMARY KEY AUTO_INCREMENT,
    platform_name VARCHAR(50) NOT NULL UNIQUE
);

-- =========================
-- 3. Tabla de Facturas
-- =========================
CREATE TABLE invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    invoice_number VARCHAR(20) NOT NULL UNIQUE,
    billing_period VARCHAR(7) NOT NULL, -- formato YYYY-MM
    billed_amount DECIMAL(12,2) NOT NULL CHECK (billed_amount >= 0),
    paid_amount DECIMAL(12,2) NOT NULL DEFAULT 0 CHECK (paid_amount >= 0),
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- =========================
-- 4. Tabla de Transacciones
-- =========================
CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    transaction_code VARCHAR(20) NOT NULL UNIQUE,
    transaction_datetime DATETIME NOT NULL,
    transaction_amount DECIMAL(12,2) NOT NULL CHECK (transaction_amount >= 0),
    transaction_status ENUM('Pendiente', 'Completada', 'Fallida') NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    platform_id INT NOT NULL,
    invoice_id INT NOT NULL,
    FOREIGN KEY (platform_id) REFERENCES platforms(platform_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);





