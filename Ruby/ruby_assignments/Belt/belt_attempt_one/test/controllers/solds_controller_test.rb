require 'test_helper'

class SoldsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get solds_index_url
    assert_response :success
  end

  test "should get show" do
    get solds_show_url
    assert_response :success
  end

  test "should get new" do
    get solds_new_url
    assert_response :success
  end

  test "should get create" do
    get solds_create_url
    assert_response :success
  end

  test "should get update" do
    get solds_update_url
    assert_response :success
  end

  test "should get destroy" do
    get solds_destroy_url
    assert_response :success
  end

end
