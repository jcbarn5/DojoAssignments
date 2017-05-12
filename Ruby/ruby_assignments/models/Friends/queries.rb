# creating the models
rails g model User first_name:string last_name:string
rails g model Friendship user_id:integer friend_id:integer

# models
class User < ActiveRecord::Base
  has_many :friendships, :foreign_key => "user_id", :class_name => "Friendship"
  has_many :friends, :through => :friendships
end

class Friendship < ActiveRecord::Base
  belongs_to :user, :foreign_key => "user_id", :class_name => "User"
  belongs_to :friend, :foreign_key => "friend_id", :class_name => "User"
end


User.create(first_name: "John", last_name: "Doe")
User.create(first_name: "Jane", last_name: "Doe")
User.create(first_name: "Michael", last_name: "Smith")
User.create(first_name: "Mary", last_name: "Smith")
User.create(first_name: "May", last_name: "Johnson")


Friendship.create(user: User.first, friend: User.last)
Friendship.create(user: User.first, friend: User.fourth)
Friendship.create(user: User.second, friend: User.third)
Friendship.create(user: User.first, friend: User.second)
Friendship.create(user: User.first, friend: User.third)


# retrieving the friends of the first user
User.first.friends


Under table where you self join:

has_many :relationship_table_name(s), :foreign_key => "current_table", :class_name =>"Relationship_table_name"
has_many :relationship(s), :through => :relationship_table_name(s)

Under relationship table:

belongs_to :self_join_table, :foreign_key => "self_join_table_id", :class_name => "Self_join_table"
belongs_to :relationship-individual, :foreign_key => "relationship-individual_id", :class_name => "Self_join_table"
