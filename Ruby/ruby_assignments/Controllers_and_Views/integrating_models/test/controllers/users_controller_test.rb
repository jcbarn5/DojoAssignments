require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_index_url
    assert_response :success
  end

  test "should get new" do
    get users_new_url
    assert_response :success
  end

  test "should get find_user" do
    get users_find_user_url
    assert_response :success
  end

  test "should get edit_user" do
    get users_edit_user_url
    assert_response :success
  end

  test "should get total_user" do
    get users_total_user_url
    assert_response :success
  end

end
