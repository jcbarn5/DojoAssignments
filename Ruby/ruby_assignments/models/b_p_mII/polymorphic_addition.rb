
rails g model Comment content:text commentable:references{polymorphic}

added lines:
to comment->
validates :content, presence: true

to user/blog/message/post->
has_many :comments, as: :commentable

Comment.create(content:"This is a comment from the first User", commentable:User.first)

Comment.create(content:"This is a comment on the first blog", commentable:Blog.first)

Comment.create(content:"This is a comment on the first post", commentable:Post.first)

Comment.create(content:"This is a comment on the first message", commentable:Message.first)
Comment.create(content:"This is another comment on the first message", commentable:Message.first)




















# rails g model Picture imageable:references{polymorphic}
# rails g model Employee first_name:string last_name:string
# rails g model Product name:string
# rake db:migrate
#
#
# class Picture < ActiveRecord::Base
#   belongs_to :imageable, polymorphic: true
# endCopy
#
# class Employee < ActiveRecord::Base
#   has_many :pictures, as: :imageable
# endCopy
#
# class Product < ActiveRecord::Base
#   has_many :pictures, as: :imageable
# end
#
# # new instance of the Picture model. Take note of the imageable_id and imageable_type columns
# Picture.new
# => #<Picture id: nil, imageable_id: nil, imageable_type: nil, created_at: nil, updated_at: nil>
# # let's create a couple of employees and products so that we can add pictures to them
# Employee.create(first_name: "John", last_name: "Doe")
# Employee.create(first_name: "Jane", last_name: "Doe")
# Product.create(name: "Pillow")
# Product.create(name: "Sofa")
# # let's create a some pictures for the employees and products we just created. There are a couple of ways to do this.
# # first example:
# Picture.create(imageable_id: 1, imageable_type: "Employee")
# Picture.create(imageable_id: 1, imageable_type: "Product")
# # second example:
# Picture.create(imageable: Employee.second)
# Picture.create(imageable: Product.second)
# # now to retrieve the pictures of any employee or products we can do the following:
# pics1 = Employee.first.pictures
# pics2 = Employee.second.pictures
# pics3 = Product.first.pictures
# pics4 = Product.second.pictures
#
# We're going to add another model (Comment) to our Blogs/Posts/Messages assignment. Let's say that we want to allow the user to leave a comment for either a user, blog, post or a message. Instead of creating a new comment table for each element (e.g. user_comments, blog_comments, post_comments, message_comments), we just want to create a single comments table but have fields in the comments table that specifies which model/table (user, blog, post, message) the comment is for.
#
# Add a new model to the previous assignment where now a model called Comment can take comments for a user, blog, post, or a message.
#
# Test using the console and make sure it allows you to add, update, delete comments for a user, blog, post, and a message.


#Break
