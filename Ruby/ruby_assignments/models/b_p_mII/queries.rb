#create 5 blogs
5.times { |i| Blog.create(name: "Blog #{i}", description: "This is blog ##{i}")}

#Have the first 3 blogs be owned by the first user
Owner.create(user:User.first, blog:Blog.first)
Owner.create(user:User.first, blog:Blog.second)
Owner.create(user:User.first, blog:Blog.third)

#Have the 4th blog you create be owned by the second user
Owner.create(user: User.second, blog: Blog.fourth)

#Have the 5th blog you create be owned by the last user
Owner.create(user:User.last, blog:Blog.fifth)

#Have the third user own all of the blogs that were created.
Blog.all.each { |i| Owner.create(user:User.third, blog: i )  }

#Have the first user create 3 posts for the blog with an id of 2. Remember that you shouldn't do Post.create(user: User.first, blog_id: 2) but more like Post.create(user: User.first, blog: Blog.find(2)). Again, you should never reference the foreign key in Rails.

3.times { |i| Post.create(title:"Post ##{i}" , content:"This is the content for post ##{i}", user: User.first, blog:Blog.find(2)) }

#Have the second user create 5 posts for the last Blog.
5.times { |i| Post.create(title:"Post ##{i}", content:"This is the content for post ##{i}", user:User.second, blog:Blog.last)}

#Have the 3rd user create several posts for different blogs.
Post.create(title:"Post #X", content:"This is the content for post #X", user:User.third, blog:Blog.last)
Post.create(title:"Post #X", content:"This is the content for post #X", user:User.third, blog:Blog.first)
Post.create(title:"Post #X", content:"This is the content for post #X", user:User.third, blog:Blog.third)

#Have the 3rd user create 2 messages for the first post created and 3 messages for the second post created
Message.create(author:User.third.first_name, message:"This is the first message for post first", user:User.third, post:Post.first)
Message.create(author:User.third.first_name, message:"This is the second message for post first", user:User.third, post:Post.first)

Message.create(author:User.third.first_name, message:"This is the first message for post first", user:User.third, post:Post.second)
Message.create(author:User.third.first_name, message:"This is the second message for post first", user:User.third, post:Post.second)
Message.create(author:User.third.first_name, message:"This is the third message for post first", user:User.third, post:Post.second)

#Have the 4th user create 3 messages for the last post you created.
Message.create(author: "AuthorMan", message: "Man book", user: User.fourth, post: Post.last)
Message.create(author: "Bob Doll", message: "What is this, some sort of tube?", user: User.fourth, post: Post.last)
Message.create(author: "Jackie", message: "A book about Robinsons", user: User.fourth, post: Post.last)

#Change the owner of the 2nd post to the last user.
Post.second.update(user: User.last)

#Change the 2nd post's content to be something else.
Post.second.update(content: "something else")

#Retrieve all blogs owned by the 3rd user (make this work by simply doing: User.find(3).blogs).
User.third.blog_owners

#Retrieve all posts that were created by the 3rd user
User.third.blog_posts

#Retrieve all messages left by the 3rd user
User.third.messages

#Retrieve all posts associated with the blog id 5 as well as who left these posts.
Post.joins(:user, :blog).where("blog.id = ?", 5).select("*")

#Retrieve all messages associated with the blog id 5 along with all the user information of those who left the messages
#In this problem, we need to do a subquery
Message.joins(:user).where(post: Blog.find(5).posts).select("*")

#Grab all user information of those that own the first blog (make this work by allowing Blog.first.owners to work).
Blog.first.users

#Change it so that the first blog is no longer owned by the first user.
Owner.where("id = ? AND user_id = ?", 1, 1,).update_all("user_id = 5")




























#break
