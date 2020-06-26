# RoomsAdmin

Implementado com:
- Angular
- ExpressJS
- MongoDB
- JWT
- Heroku

## Visão geral do sistema

O aplicativo desenvolvido compreende um sistema de gerenciamento
do espaços &#x2014; denominado *RoomsAdmin* &#x2014;,
projetado como uma aplicação web.

O sistema possui três tipo de usuários:
*autenticado*, *responsável* e *administrador*.
As funcionalidades do sistema estão organizadas de acordo com
esses três tipos de usuários.

Usuários do tipo *autenticado* são os usuários comuns do sistema.
Podem:

-   reservar espaços;
-   realizar buscas por espaços;
-   visualizar e cancelar suas próprias reservas.

Usuários do tipo *responsável* são os usuários responsáveis
por um setor. No *RoomsAdmin* os espaços são organizados em setores e
cada setor tem um usuário responsável, além disso, toda reserva deve
ser aprovada por um usuário do tipo *responsável* antes de ser efetivada
(cada responsável por setor pode aprovar ou rejeitar
reservas feitas nos espaços pertencentes aos setores sobre os quais
é responsável).

Usuários do tipo administrador são responsáveis
pelo gerenciamento da aplicação. Podem:

-   adicionar e remover usuário;
-   adicionar, remover e atualizar espaços;
-   adicionar, remover e atualizar setores;
-   remover reservas;
-   definir responsável por setor.

## Arquitetura da aplicação

A aplicação é dividida em três componentes &#x2014; *cliente principal*,
*cliente administrador* e *servidor*.
Os componentes *cliente principal* e *cliente administrador* são
responsáveis pela interface gráfica da aplicação. O componente
*servidor* é responsável pelo logica da aplicação.

Os componentes *cliente principal* e *cliente administrador* são
implementados como aplicações *Angular* e executam no navegador
web do usuário.
O componente *servidor* é implementado como uma aplicação *Express.js*
(um servidor de API REST);
*MongoDB* é utilizado como banco de dados.

![img](https://github.com/davideas000/images/blob/master/architecture2.svg)

## Interfaces de usuário e Funcionamento da aplicação

### Interface de login

![img](https://github.com/davideas000/images/blob/master/login_page.png "Interface de login")

### Interface de listagem de espaços

![img](https://github.com/davideas000/images/blob/master/rooms_page.png "Interface de listagem de espaços")


### Interface de registro de nova reserva

![img](https://github.com/davideas000/images/blob/master/new_reservation_page.png "Interface de criação de uma nova reserva")

### Interface de detalhes de espaço

![img](https://github.com/davideas000/images/blob/master/room_details_page.png "Interface de detalhes de um espaço")


### Interface de listagem de reservas aprovadas de usuário

![img](https://github.com/davideas000/images/blob/master/my_approved_reservations_page.png "Interface de listagem reservas aprovadas de usuário")


### Interface de listagem de reservas pendentes de usuário

![img](https://github.com/davideas000/images/blob/master/my_pending_reservations_page.png "Interface de listagem de reservas pendentes de usuário")


### Interface de listagem de reservas aprovadas de setor

![img](https://github.com/davideas000/images/blob/master/department_approved_reservations_page.png "Interface de listagem de reservas aprovadas de setor")

### Interface de listagem de reservas pendentes de setor

![img](https://github.com/davideas000/images/blob/master/department_pending_reservations_page.png "Interface de listagem de reservas pendentes de setor")

### Interface de listagem de usuários

![img](https://github.com/davideas000/images/blob/master/admin_users_page.png "Interface de listagem de usuários")

### Interface de listagem de espaços (administrador)

![img](https://github.com/davideas000/images/blob/master/admin_rooms_page.png "Interface de listagem de espaços (administrador)")

### Interface de cadastro de espaço

![img](https://github.com/davideas000/images/blob/master/admin_add_room_page2.png "Interface de cadastro de espaço")

### Interface de listagem de setores

![img](https://github.com/davideas000/images/blob/master/admin_departments_page.png "Interface de listagem de setores")

### Interface de cadastro de setor

![img](https://github.com/davideas000/images/blob/master/admin_new_department_page.png "Interface de adição de novo setor")

### Interface de listagem de reservas (administrador)

![img](https://github.com/davideas000/images/blob/master/admin_reservations_page.png "Interface de listagem de reservas (administrador)")
