class User < ApplicationRecord
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  has_many :messages
  has_many :posts
  has_many :owners
  # has_many :blogs, through: :owners
  has_many :blog_owners, through: :owners, source: :blog
  has_many :blog_posts, through: :posts, source: :blog
  has_many :comments, as: :commentable

  validates :first_name, :last_name, :email_address, presence: true, length: { in: 2..20 }
  validates :email_address, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
