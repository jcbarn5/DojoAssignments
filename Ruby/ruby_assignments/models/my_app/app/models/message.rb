class Message < ApplicationRecord
  belongs_to :user

  #!!belongs_to :user above is the same as the method below!!
  # def user
  #   Message.find_by_sql("SELECT * FROM users WHERE users.id = #{self.user_id}")
  # end

end
