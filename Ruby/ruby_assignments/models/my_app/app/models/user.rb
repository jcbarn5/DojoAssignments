class User < ApplicationRecord
  has_many :messages

  #!!has_many :messages above is the same as the method below!!
  # def messages
  #   User.find_by_sql("SELECT * FROM messages WHERE messages.user_id = #{self.id}")
  # end

end
