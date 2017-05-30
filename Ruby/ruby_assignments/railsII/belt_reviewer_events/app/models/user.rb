class User < ApplicationRecord
  has_secure_password

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  before_create :password, :password_confirmation, presence: true, length: {minimum: 8}
  validates :email, uniqueness: { case_sensitive:false }, format: { with: EMAIL_REGEX}
  validates :first_name, :last_name, :email, :location, :state, presence: true
  validates :state, length: {is: 2}

  has_many :events
  has_many :attends
  has_many :comments, dependent: :destroy
  has_many :events_attending, through: :attends, source: :event
  has_many :event_comments, through: :comments, source: :event
end
