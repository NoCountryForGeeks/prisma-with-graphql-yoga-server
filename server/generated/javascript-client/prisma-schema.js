module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCustomer {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderLine {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Customer {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  address1: String!
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  id: ID
  name: String!
  address1: String!
  order: OrderCreateManyWithoutCustomerInput
}

input CustomerCreateOneWithoutOrderInput {
  create: CustomerCreateWithoutOrderInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateWithoutOrderInput {
  id: ID
  name: String!
  address1: String!
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  address1_ASC
  address1_DESC
}

type CustomerPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  address1: String!
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateInput {
  name: String
  address1: String
  order: OrderUpdateManyWithoutCustomerInput
}

input CustomerUpdateManyMutationInput {
  name: String
  address1: String
}

input CustomerUpdateOneRequiredWithoutOrderInput {
  create: CustomerCreateWithoutOrderInput
  update: CustomerUpdateWithoutOrderDataInput
  upsert: CustomerUpsertWithoutOrderInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpdateWithoutOrderDataInput {
  name: String
  address1: String
}

input CustomerUpsertWithoutOrderInput {
  update: CustomerUpdateWithoutOrderDataInput!
  create: CustomerCreateWithoutOrderInput!
}

input CustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address1: String
  address1_not: String
  address1_in: [String!]
  address1_not_in: [String!]
  address1_lt: String
  address1_lte: String
  address1_gt: String
  address1_gte: String
  address1_contains: String
  address1_not_contains: String
  address1_starts_with: String
  address1_not_starts_with: String
  address1_ends_with: String
  address1_not_ends_with: String
  order_some: OrderWhereInput
  AND: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

scalar Long

type Mutation {
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderLine(data: OrderLineCreateInput!): OrderLine!
  updateOrderLine(data: OrderLineUpdateInput!, where: OrderLineWhereUniqueInput!): OrderLine
  updateManyOrderLines(data: OrderLineUpdateManyMutationInput!, where: OrderLineWhereInput): BatchPayload!
  upsertOrderLine(where: OrderLineWhereUniqueInput!, create: OrderLineCreateInput!, update: OrderLineUpdateInput!): OrderLine!
  deleteOrderLine(where: OrderLineWhereUniqueInput!): OrderLine
  deleteManyOrderLines(where: OrderLineWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  orderStatus: OrderStatus!
  customer: Customer!
  orderLines(where: OrderLineWhereInput, orderBy: OrderLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderLine!]
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  orderStatus: OrderStatus!
  customer: CustomerCreateOneWithoutOrderInput!
  orderLines: OrderLineCreateManyWithoutOrderInput
}

input OrderCreateManyWithoutCustomerInput {
  create: [OrderCreateWithoutCustomerInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutOrderLinesInput {
  create: OrderCreateWithoutOrderLinesInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutCustomerInput {
  id: ID
  orderStatus: OrderStatus!
  orderLines: OrderLineCreateManyWithoutOrderInput
}

input OrderCreateWithoutOrderLinesInput {
  id: ID
  orderStatus: OrderStatus!
  customer: CustomerCreateOneWithoutOrderInput!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderLine {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Int!
  order: Order!
  product: Product!
}

type OrderLineConnection {
  pageInfo: PageInfo!
  edges: [OrderLineEdge]!
  aggregate: AggregateOrderLine!
}

input OrderLineCreateInput {
  id: ID
  quantity: Int!
  order: OrderCreateOneWithoutOrderLinesInput!
  product: ProductCreateOneInput!
}

input OrderLineCreateManyWithoutOrderInput {
  create: [OrderLineCreateWithoutOrderInput!]
  connect: [OrderLineWhereUniqueInput!]
}

input OrderLineCreateWithoutOrderInput {
  id: ID
  quantity: Int!
  product: ProductCreateOneInput!
}

type OrderLineEdge {
  node: OrderLine!
  cursor: String!
}

enum OrderLineOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  quantity_ASC
  quantity_DESC
}

type OrderLinePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Int!
}

input OrderLineScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderLineScalarWhereInput!]
  OR: [OrderLineScalarWhereInput!]
  NOT: [OrderLineScalarWhereInput!]
}

type OrderLineSubscriptionPayload {
  mutation: MutationType!
  node: OrderLine
  updatedFields: [String!]
  previousValues: OrderLinePreviousValues
}

input OrderLineSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderLineWhereInput
  AND: [OrderLineSubscriptionWhereInput!]
}

input OrderLineUpdateInput {
  quantity: Int
  order: OrderUpdateOneRequiredWithoutOrderLinesInput
  product: ProductUpdateOneRequiredInput
}

input OrderLineUpdateManyDataInput {
  quantity: Int
}

input OrderLineUpdateManyMutationInput {
  quantity: Int
}

input OrderLineUpdateManyWithoutOrderInput {
  create: [OrderLineCreateWithoutOrderInput!]
  delete: [OrderLineWhereUniqueInput!]
  connect: [OrderLineWhereUniqueInput!]
  set: [OrderLineWhereUniqueInput!]
  disconnect: [OrderLineWhereUniqueInput!]
  update: [OrderLineUpdateWithWhereUniqueWithoutOrderInput!]
  upsert: [OrderLineUpsertWithWhereUniqueWithoutOrderInput!]
  deleteMany: [OrderLineScalarWhereInput!]
  updateMany: [OrderLineUpdateManyWithWhereNestedInput!]
}

input OrderLineUpdateManyWithWhereNestedInput {
  where: OrderLineScalarWhereInput!
  data: OrderLineUpdateManyDataInput!
}

input OrderLineUpdateWithoutOrderDataInput {
  quantity: Int
  product: ProductUpdateOneRequiredInput
}

input OrderLineUpdateWithWhereUniqueWithoutOrderInput {
  where: OrderLineWhereUniqueInput!
  data: OrderLineUpdateWithoutOrderDataInput!
}

input OrderLineUpsertWithWhereUniqueWithoutOrderInput {
  where: OrderLineWhereUniqueInput!
  update: OrderLineUpdateWithoutOrderDataInput!
  create: OrderLineCreateWithoutOrderInput!
}

input OrderLineWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  order: OrderWhereInput
  product: ProductWhereInput
  AND: [OrderLineWhereInput!]
}

input OrderLineWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  orderStatus_ASC
  orderStatus_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  orderStatus: OrderStatus!
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  orderStatus: OrderStatus
  orderStatus_not: OrderStatus
  orderStatus_in: [OrderStatus!]
  orderStatus_not_in: [OrderStatus!]
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

enum OrderStatus {
  NotOrdererd
  InProcess
  Delivered
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  orderStatus: OrderStatus
  customer: CustomerUpdateOneRequiredWithoutOrderInput
  orderLines: OrderLineUpdateManyWithoutOrderInput
}

input OrderUpdateManyDataInput {
  orderStatus: OrderStatus
}

input OrderUpdateManyMutationInput {
  orderStatus: OrderStatus
}

input OrderUpdateManyWithoutCustomerInput {
  create: [OrderCreateWithoutCustomerInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredWithoutOrderLinesInput {
  create: OrderCreateWithoutOrderLinesInput
  update: OrderUpdateWithoutOrderLinesDataInput
  upsert: OrderUpsertWithoutOrderLinesInput
  connect: OrderWhereUniqueInput
}

input OrderUpdateWithoutCustomerDataInput {
  orderStatus: OrderStatus
  orderLines: OrderLineUpdateManyWithoutOrderInput
}

input OrderUpdateWithoutOrderLinesDataInput {
  orderStatus: OrderStatus
  customer: CustomerUpdateOneRequiredWithoutOrderInput
}

input OrderUpdateWithWhereUniqueWithoutCustomerInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutCustomerDataInput!
}

input OrderUpsertWithoutOrderLinesInput {
  update: OrderUpdateWithoutOrderLinesDataInput!
  create: OrderCreateWithoutOrderLinesInput!
}

input OrderUpsertWithWhereUniqueWithoutCustomerInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutCustomerDataInput!
  create: OrderCreateWithoutCustomerInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  orderStatus: OrderStatus
  orderStatus_not: OrderStatus
  orderStatus_in: [OrderStatus!]
  orderStatus_not_in: [OrderStatus!]
  customer: CustomerWhereInput
  orderLines_some: OrderLineWhereInput
  AND: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Int!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  price: Int!
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  name: String
  price: Int
}

input ProductUpdateInput {
  name: String
  price: Int
}

input ProductUpdateManyMutationInput {
  name: String
  price: Int
}

input ProductUpdateOneRequiredInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  connect: ProductWhereUniqueInput
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  AND: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderLine(where: OrderLineWhereUniqueInput!): OrderLine
  orderLines(where: OrderLineWhereInput, orderBy: OrderLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderLine]!
  orderLinesConnection(where: OrderLineWhereInput, orderBy: OrderLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderLineConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  node(id: ID!): Node
}

type Subscription {
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderLine(where: OrderLineSubscriptionWhereInput): OrderLineSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}
`
      }
    