# AGENTS.md

## Project overview
This repository is a NestJS + PostgreSQL e-commerce backend built in small, reviewable steps.
The goal is to learn backend architecture properly while building a real product flow from foundation to checkout and admin management.

## Build flow
1. Foundation and app setup
   - NestJS app bootstrap
   - environment configuration
   - database connection setup
   - health endpoint
   - base app module structure

2. User authentication
   - user entity and table
   - signup flow
   - login flow
   - password hashing
   - JWT generation and validation

3. Product catalog
   - categories
   - products
   - listing by category
   - product details
   - filtering and sorting basics

4. Cart management
   - add item to cart
   - update quantity
   - remove item
   - view cart totals
   - cart-user relationship

5. Checkout and orders
   - checkout flow from cart
   - order creation
   - order item records
   - status tracking
   - order history

6. Admin features
   - protected admin routes
   - product management
   - order status updates
   - dashboard-style order listing

7. Hardening and polish
   - validation
   - DTOs
   - error handling
   - tests
   - security checks

## Working rules
- Build one page or feature at a time.
- Do not jump ahead to later modules before the current one is reviewed.
- Keep each feature focused and easy to validate.
- Prefer simple NestJS patterns: modules, controllers, services, DTOs, entities.
- Use PostgreSQL and TypeORM patterns when the feature requires persistence.
- Do not add unused libraries, advanced abstractions, or extra features that were not requested.
- No frontend work unless specifically asked.
- No large scaffold generation after the project has started.
- If the user asks for a page, only build that page and its direct dependencies.

## Communication rules
- Explain what the page is doing and why it matters.
- Do not provide implementation code unless the user explicitly asks for it.
- Give page specs in plain English so the user can write the code themselves.
- Keep feedback focused on correctness, structure, and learning value.

## Review loop
1. User identifies the next page/feature.
2. The assistant explains the exact feature to build.
3. The user writes the code.
4. The assistant reviews architecture, correctness, and improvements.
5. Only then do we continue to the next page.
