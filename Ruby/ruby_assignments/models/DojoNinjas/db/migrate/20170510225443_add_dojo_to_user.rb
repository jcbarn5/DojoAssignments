class AddDojoToUser < ActiveRecord::Migration[5.0]
  def change
    add_reference :ninjas, :dojo, foreign_key: true
  end
end
